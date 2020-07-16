export class LocalStorageService {
  getItem(key) {
    if (this.storageAvailable("localStorage")) {
      const item = window.localStorage.getItem(key);
      return JSON.parse(item);
    }
  }

  setItem(key, item) {
    if (this.storageAvailable("localStorage")) {
      const value = JSON.stringify(item);
      window.localStorage.setItem(key, value);
    }
  }

  removeItem(key) {
    if (this.storageAvailable("localStorage")) {
      window.localStorage.removeItem(key);
    }
  }

  clear() {
    if (this.storageAvailable("localStorage")) {
      window.localStorage.clear();
    }
  }

  storageAvailable(type) {
    var storage;
    try {
      storage = window[type];
      var x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e;
    }
  }
}
