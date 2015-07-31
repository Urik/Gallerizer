module Models {
	export class Image {
		constructor(public url: string, public title: string) {

		}

		toString() {
			return this.title;
		}
	}
}
