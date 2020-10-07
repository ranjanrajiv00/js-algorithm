// testcase 1 - output sampleData[0]
const filters1 = {
    id: "0",
    brand: true
};

// testcase 2 - output sampleData[0, 2]
const filters2 = {
    productGroup: {
        code: "W1"
    }
};

// testcase 3 - output sampleData[1]
const filters3 = {
    country: [
        {
            code: "GB",
            authorised: true
        },
        {
            code: "ROI",
            authorised: true
        }
    ]
};

const sampleData = [
    {
        id: "0",
        brand: true,
        country: [
            {
                code: "GB",
                authorised: true
            },
            {
                code: "ROI",
                authorised: true
            }
        ],
        productGroup: {
            code: "W1",
            number: 2300
        }
    },
    {
        id: "1",
        brand: false,
        country: [
            {
                code: "GB",
                authorised: false
            },
            {
                code: "ROI",
                authorised: false
            }
        ],
        productGroup: {
            code: "W2",
            number: 2300
        }
    },
    {
        id: "2",
        brand: true,
        country: [
            {
                code: "GB",
                authorised: true
            },
            {
                code: "ROI",
                authorised: false
            }
        ],
        productGroup: {
            code: "W1",
            number: 2300
        }
    }
];

function compare(source, filter) {
    var isMatched = true;

    if (!filter)
        return false;

    function match(source, filter) {
        for (var key in filter) {
            if (typeof filter[key] === 'object') {
                match(source[key], filter[key])
            }
            else if (source[key] !== filter[key]) {
                isMatched = false;
                break;
            }
        }
    }
    match(source, filter);

    return isMatched;
}

function customFilter(sampleData, filters) {
    return sampleData.filter((item) => {
        return compare(item, filters);
    });
}

console.log("case 1", customFilter(sampleData, filters1));
console.log("case 2", customFilter(sampleData, filters2));
console.log("case 3", customFilter(sampleData, filters3));