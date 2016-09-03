import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { SocialSharing } from 'ionic-native';


@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    constructor(private platform: Platform) {
        this.platform = platform;
    }

    share(message, subject, file, link) {
        this.platform.ready().then(() => {
            SocialSharing.share(message, subject, file, link);
        });
    }

    shareViaEmail(message, image, link) {
        this.platform.ready().then(() => {
            SocialSharing.canShareViaEmail().then(() => {
                SocialSharing.shareViaEmail(message, image, link);
            }, (err) => {
                console.error(err);
            });
        });
    }
    shareViaFacebook(message, image, url) {
        this.platform.ready().then(() => {
            SocialSharing.shareViaFacebook(message, image, url);

        });
    }
    shareViaWhatsApp(message, image, url) {
        this.platform.ready().then(() => {
            SocialSharing.shareViaWhatsApp(message, image, url);
        });
    }

}