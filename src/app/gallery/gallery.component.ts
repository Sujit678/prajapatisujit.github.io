import { Component } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    providers: [NgbCarouselConfig]
})
export class GalleryComponent {
    constructor(config: NgbCarouselConfig) {
        config.interval = 2000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = true;
    }

}

