export class User {

    constructor(
        public id: number,
        public bookingnumber: number,
        public ordered_by?: string,
        public addres?: string,
        public fax?: string,
        public email?: string,
        public phone?: string,
        public status?: string,
        public booking_date?: string,
        public arrival?: string,
        public departure?: string,
    ) { }

    public static fromObject(obj: any) {
        let user = new User(obj.id, obj.bookingnumber);
        user.ordered_by = obj.ordered_by;
        user.addres = obj.addres;
        user.phone = obj.phone;
        user.fax = obj.fax;
        user.email = obj.email;
        user.booking_date = obj.booking_date;
        user.arrival = obj.arrival;
        user.departure = obj.departure;

        return user;
    }
}