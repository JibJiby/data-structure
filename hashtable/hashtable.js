class HashTable {
    constructor(size) {
        this.size = size;
        this.storage = {};
    }

    set(newKey, newValue) {
        let curSize = Object.keys(this.storage).length;
        if (this.size < curSize + 1) {
            this.size *= 2;
        }
        if (!this.storage[this._hash(newKey)]) {
            this.storage[this._hash(newKey)] = newValue;
        }
        // TODO: 이미 데이터가 있다면 ??
    }

    get(key) {
        return this.storage[key];
    }

    // 간단한 해시 함수
    _hash(key) {
        return key % 5;
    }

    print() {
        console.log('Size  :  ', this.size, '  /  Data  :  ', this.storage);
    }
}

module.exports = HashTable;
