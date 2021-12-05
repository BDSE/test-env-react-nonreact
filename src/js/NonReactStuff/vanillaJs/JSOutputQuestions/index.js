/*
var devicetype = 'typec';

var obj = {
    devicetype: 'typeb',
    test1: {
        devicetype: 'typea',
        test: function () {
            console.log(this.devicetype);
        }
    }
};

var test2 = obj.test1.test;

obj.test1.test(); // typea

//test2(); // typea

test2.call(obj);//typeb*/


var inputs = [
    {
        id: 1,
        parentId: '',
        label: 'root'
    },
    {
        label: 'b',
        id: 2,
        parentId: 1,
    },
    {
        label: 'c',
        id: 3,
        parentId: 1,
    },
    {
        label: 'h',
        id: 4,
        parentId: 1,
    },
    {
        label: 'i',
        id: 5,
        parentId: 4,
    },
    {
        label: 'f',
        id: 6,
        parentId: 2,
    },
    {
        label: 'e',
        id: 7,
        parentId: 3,
    },
    {
        label: 'd',
        id: 8,
        parentId: 3,
    },
    {
        label: 'g',
        id: 9,
        parentId: 6,
    }
];

let output = {
    id: 1,
    label: 'root',
    total: 8,
    children: [
        {
            id: 2,
            label: 'b',
            total: 2,
            children: [
                {
                    id: 6,
                    label: 'f',
                    children: []
                }
            ]
        },
        {
            id: 3,
            label: 'c',
            children: [
                {
                    id: 7,
                    label: 'e',
                    children: []
                }
            ]
        }
    ]
};

let normalize = (list) => {
    let parentChildrenMap = {},
        res = {},
        createModel = (entry) => {
            return {
                id: entry.id,
                label: entry.label,
                total: 0,
                children: []
            };
        };
    for (let entry of list) {
        if (entry.label === 'root') {
            res = createModel(entry);
            parentChildrenMap[res.id] = {
                parentId: '',
                data: res
            };
        } else {
            let parentId = entry.parentId,
                parent = parentChildrenMap[parentId],
                {data} = parent,
                child = createModel(entry);
            data.children.push(child);
            data.total += 1;
            parentChildrenMap[entry.id] = {
                parentId: parentId,
                data: child
            };
            parentId = parent.parentId;
            while (parentChildrenMap[parentId]){
                parent = parentChildrenMap[parentId];
                data = parent.data;
                data.total += 1;
                parentId = parent.parentId;
            }
        }
    }
    return res;
};

console.log(normalize(inputs));
