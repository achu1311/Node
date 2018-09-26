class Users {

    constructor() {
        this.users = [
        ]

    }
    addUser(id, name, room) {
        var user = { id, name, room };
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        let user = this.getUser(id);
        if (user) {
            this.users = this.users.filter(function (userFilter) {
                return userFilter.id !== id;
            });
        }
        return user;
    }
    getUser(id) {
        let user = this.users.filter(function (user) {
            return user.id === id;
        })
        return user[0];
    }
    getUserList(room) {
        let user = this.users.filter(function (user) {
            return user.room === room;
        })
        let userList = user.map(function (userNames) {
            return userNames.name;
        })
        return userList;
    }
}

module.exports = { Users };
