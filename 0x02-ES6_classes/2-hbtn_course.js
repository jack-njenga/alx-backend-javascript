export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name should be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length === 'number' && length > 0) {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Students be an array of strings');
    }
  }

  get students() {
    return this._students;
  }
}
