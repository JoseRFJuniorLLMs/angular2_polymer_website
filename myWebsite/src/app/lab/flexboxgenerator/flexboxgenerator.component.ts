import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flexboxgenerator',
  templateUrl: './flexboxgenerator.component.html',
  styleUrls: ['./flexboxgenerator.component.css']
})
export class FlexboxgeneratorComponent implements OnInit {

  cardsText: any[];
  lockElemen: any;
  lockElemTop: int;
  lockElemLeft: int;

  @ViewChild('test') test;

  constructor() {



    this.cardsText = [];

    this.cardsText.push(
      {
        'order': 1,
        'text': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
      }
    );

    this.cardsText.push({
      'order': 2,
      'text': 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
    });

    this.cardsText.push({
      'order': 3,
      'text': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
    });

    this.cardsText.push({
      'order': 4,
      'text': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
    });

  }

  releaseClick(e, mess) {
    console.log(e, this.test);
    this.lockElemen = null;
    //console.log(this.test.nativeElement.children);
  }

  lockElement(e) {

    let x = e.clientX;
    let y = e.clientY;

    console.log(x, y);

    this.lockElemen = this.findElem(x, y);


    this.lockElemen.style.position = 'absolute';
    this.lockElemen.style.top = y - 300 +'px';
    this.lockElemen.style.left = x-100+'px';
    this.lockElemen.style.zIndex = 1000;
    this.lockElemen.style.backgroundColor='rgba(0,0,0,0.4)';
  }

  findElem(x, y) {
    for (let elem of this.test.nativeElement.children) {
      if (x >= elem.offsetLeft && x <= (elem.offsetLeft + elem.clientWidth)) {
        return elem;
      }
    }
  }

  moveMouse(e) {
    let x = e.clientX;
    let y = e.clientY;

    if( this.lockElemen)
    {
    this.lockElemen.style.top = y - 300 +'px';
    this.lockElemen.style.left = x - 100+'px';
    }

  }

  ngOnInit() {
  }

}
