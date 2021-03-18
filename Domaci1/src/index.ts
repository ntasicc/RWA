import {Vinyl} from "./vinyl";
import {Shop} from "./shop";

const shop=new Shop("Record Store Crawl");

const v1=new Vinyl(1,"Dear.","Cavetown",19.99,"https://f4.bcbits.com/img/a1910839816_10.jpg");
const v2=new Vinyl(2,"One-X","Three Days Grace",10.99,"https://upload.wikimedia.org/wikipedia/en/c/cf/One_X.png");
const v3=new Vinyl(3,"Let Light Overcome","Our Last Night",11.99,"https://m.media-amazon.com/images/I/81sJWAvWvIL._SS500_.jpg");
const v4=new Vinyl(4,"amo","Bring me the horizon",25.99,"https://img.discogs.com/lwBoh9RMwP9dbQ14lKZTJ82Hud8=/fit-in/558x554/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13112222-1556878004-5608.jpeg.jpg");
const v5=new Vinyl(5,"Teardrops","Bring me the horizon",8.99,"https://spottedsounds.com/wp-content/uploads/2020/11/bring-me-the-horizon.jpg");
const v6=new Vinyl(6,"Transmissions","Starset",13.99,"https://img.discogs.com/kftkD3MEN6I2kt-YGRh2CKyrZBE=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8110737-1455343211-7360.jpeg.jpg");
const v7=new Vinyl(7,"Wretched and Divine: The Story of the Wild Ones","Black Veil Brides",10.99,"https://i.pinimg.com/originals/1d/31/8a/1d318af5df154979299965a256f52706.jpg");
shop.addVinyl(v1);
shop.addVinyl(v2);
shop.addVinyl(v3);
shop.addVinyl(v4);
shop.addVinyl(v5);
shop.addVinyl(v6);
shop.addVinyl(v7);
shop.draw(document.body);
