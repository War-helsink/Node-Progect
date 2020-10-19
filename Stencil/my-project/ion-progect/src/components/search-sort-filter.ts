import state from "./store";



class maxFunction {

    constructor(obj, nameDb, price = false) {
        //@ts-ignore
        this.obj = obj;
        //@ts-ignore
        this.nameDb = nameDb
        //@ts-ignore
        this.price = price;
    }
    startFunction() {
        //@ts-ignore
        if (this.obj.sort.fromWhere)
            //@ts-ignore
            state[this.nameDb[1]].sort((a, b) => a[this.obj.sort.argument] > b[this.obj.sort.argument] ? 1 : -1);
        else
            //@ts-ignore
            state[this.nameDb[1]].sort((a, b) => b[this.obj.sort.argument] > a[this.obj.sort.argument] ? 1 : -1);

        let newItems = [];
        //@ts-ignore
        state[this.nameDb[1]].forEach((item) => {
            let push = true;
            //@ts-ignore
            if (this.price) {
                //@ts-ignore
                if (item.price >= this.obj.price.min &&
                    //@ts-ignore
                    item.price <= this.obj.price.max) {
                    //@ts-ignore
                    for (let i = 0; i < this.obj.search.length; i++) {
                        //@ts-ignore
                        if (this.obj.search[i] == item.name[i] && push) {
                            push = true;
                        }
                        else {
                            push = false;
                        }
                    }
                    if (push)
                        newItems.push(item);
                }
            } else {
                //@ts-ignore
                for (let i = 0; i < this.obj.search.length; i++) {
                    //@ts-ignore
                    if (this.obj.search[i] == item.name[i] && push) {
                        push = true;
                    }
                    else {
                        push = false;
                    }
                }
                if (push)
                    newItems.push(item);
            }
        });
        let items = [];
        newItems.forEach((item) => {
            //@ts-ignore
            this.obj.filter.color.forEach((color) => {
                //@ts-ignore
                this.obj.filter.size.forEach((size) => {
                    //@ts-ignore
                    this.obj.filter.weight.forEach((weight) => {
                        if (item.specifications.color == color
                            && item.specifications.size == size
                            && item.specifications.weight == weight
                        ) {
                            items.push(item);
                        }
                    });
                });
            });
        });


        //@ts-ignore
        state[this.nameDb[0]] = items;

    }



}



export default maxFunction;