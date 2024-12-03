import React, {Component} from "react";

let counter = 0;

const newImage = () => ({
    id: counter++,
    zoom: 0,
});

export default class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [newImage()],
        }

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.zoomIn = this.zoomIn.bind(this);
        this.zoomOut = this.zoomOut.bind(this);
    }

    add() {
        this.setState({
            images: this.state.images.concat(newImage())
        });
    }

    remove() {
        this.setState({
            images: this.state.images.slice(0, this.state.images.length - 1)
        });
    }

    zoomIn() {
        const last = this.state.images[this.state.images.length - 1];
        if (last.zoom === -1) {
            last.zoom = 0;
        } else if (last.zoom === 0) {
            last.zoom = 1;
        }
        this.setState({
            images: this.state.images
        });
    }

    zoomOut() {
        const last = this.state.images[this.state.images.length - 1];
        if (last.zoom === 1) {
            last.zoom = 0;
        } else if (last.zoom === 0) {
            last.zoom = -1;
        }
        this.setState({
            images: this.state.images
        });
    }


    render() {
        const { add, remove, zoomIn, zoomOut } = this;
        const { images } = this.state;
        return (<>
            {images.map(image => (
                <a key={image.id} href="https://krm.gov.ua/">
                    <div className="image">
                        <img
                            className={image.zoom === 1 ? 'zoomed' : image.zoom === -1 ? 'zoomed-out' : ''}
                            alt="Kramatorsk"
                            src="https://v-variant.com.ua/wp-content/uploads/2023/01/Kramatorsk-viyna.jpg" width="400"/>
                    </div>
                </a>
            ))}
            <section>
                <button onClick={add}>Додати</button>
                <button onClick={zoomIn}>Збільшити</button>
                <button onClick={zoomOut}>Зменшити</button>
                <button onClick={remove}>Видалити</button>
            </section>
        </>);
    }
}
