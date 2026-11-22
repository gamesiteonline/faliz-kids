const DB = "faliz-kids-world";
const STORE = "kv";
const KEY = "save";
const LS = "faliz-kids-world-save";

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function fromLocal(): unknown | null {
  try {
    const raw = localStorage.getItem(LS);
    return raw ? (JSON.parse(raw) as unknown) : null;
  } catch {
    return null;
  }
}

export async function readRaw(): Promise<unknown | null> {
  const local = fromLocal();
  try {
    const db = await Promise.race([
      openDb(),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 700)),
    ]);
    if (!db) return local;
    const value = await new Promise<unknown>((resolve, reject) => {
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).get(KEY);
      req.onsuccess = () => resolve(req.result ?? null);
      req.onerror = () => reject(req.error);
    });
    if (value != null) return value;
  } catch {
    /* fall through */
  }
  return local;
}

export async function writeRaw(data: unknown) {
  try {
    localStorage.setItem(LS, JSON.stringify(data));
  } catch {
    /* ignore quota */
  }
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put(data, KEY);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    /* local copy still exists */
  }
}
