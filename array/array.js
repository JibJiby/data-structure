class MyArray {
    constructor() {
        this.length = 0;
        this.array = [];
    }

    // 데이터 추가하기
    push(newData) {
        this.array[this.length++] = newData;
    }

    // 특정 index의 데이터 가져오기
    get(idx) {
        if (idx in this.array) {
            return this.array[idx];
        }
        throw new RangeError('해당 인덱스에 데이터가 존재하지 않아요!');
    }

    // 중간에 데이터 추가
    insert(idx, newData) {
        if (idx < 0 || idx > this.length) {
            throw new RangeError('배열 범위를 초과했습니다!');
        }

        // 하나씩 이동시키기
        for (let i = this.length; i > idx; i--) {
            this.array[i] = this.array[i - 1];
        }
        this.array[idx] = newData;
        this.length++;
    }

    // 중간에 데이터 삭제
    delete(idx) {
        if (idx < 0 || idx >= this.length) {
            throw new RangeError('배열 범위를 초과했습니다!');
        }

        // 해당 인덱스 뒤에 있는 모든 원소를 하나씩 이동시키기
        for (let i = idx; i < this.length; i++) {
            this.array[i] = this.array[i + 1];
        }

        // delete 를 사용하면 length는 그대로이기 때문에 splice를 사용함.
        // delete this.array[this.length - 1]
        this.array.splice(this.length - 1);
        this.length--;
    }

    // 현재 배열에 저장된 모든 데이터 출력하기
    print() {
        console.log(JSON.stringify(this.array));
    }
}

module.exports = MyArray;
