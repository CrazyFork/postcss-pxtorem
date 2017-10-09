module.exports = {
    exact: function (list) {
        return list.filter(function (m) {
            return m.match(/^[^\*\!]+$/);
        });
    },
    contain: function (list) {
        return list.filter(function (m) {
            return m.match(/^\*.+\*$/); // starts with * and ends with *
        }).map(function (m) {
            return m.substr(1, m.length - 2); // extract the words between *
        });
    },
    endWith: function (list) {
        return list.filter(function (m) {
            return m.match(/^\*[^\*]+$/);
        }).map(function (m) {
            return m.substr(1);
        });
    },
    startWith: function (list) {
        // any chars that not starts with *!
        return list.filter(function (m) {
            return m.match(/^[^\*\!]+\*$/);
        }).map(function (m) {
            return m.substr(0, m.length - 1);
        });
    },
    notExact: function (list) { // neg extract match
        return list.filter(function (m) {
            return m.match(/^\![^\*].*$/);
        }).map(function (m) {
            return m.substr(1);
        });
    },
    notContain: function (list) {
        return list.filter(function (m) {
            return m.match(/^\!\*.+\*$/);
        }).map(function (m) {
            return m.substr(2, m.length - 3); // why -3, it doesn't make sense to me ? only ending with a *, where's the other char
        });
    },
    notEndWith: function (list) {
        return list.filter(function (m) {
            return m.match(/^\!\*[^\*]+$/);
        }).map(function (m) {
            return m.substr(2);
        });
    },
    notStartWith: function (list) {
        return list.filter(function (m) {
            return m.match(/^\![^\*]+\*$/);
        }).map(function (m) {
            return m.substr(1, m.length - 2);
        });
    }
};
