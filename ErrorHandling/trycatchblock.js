const course = {
    name: 'JavaScrip[t for Beginners',
    duration: '3 hours',
    get courseDetails() {
        return `${this.name} is ${this.duration} long`;
    },
    set courseDetails(value) {
        if (typeof value !== 'string') {
            throw new Error(`Value, ${value} is not a string`);
        }
        let parts = value.split(' is ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

try {
    course.courseDetails = 42;
} catch (e) {
    console.log(`Caught an error: ${e.message}`); 
}