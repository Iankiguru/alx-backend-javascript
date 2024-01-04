// 5-building.js
export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    // Abstract method, must be implemented by subclasses
    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}
