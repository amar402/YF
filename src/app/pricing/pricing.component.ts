import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  hideClickedRow = (el: any) => {
                                   el.showModel = el.showModel ? el.showModel : false;
                                    el.showModel = !el.showModel ;
                                  }
  // tslint:disable-next-line:member-ordering
  items: any = [
    {
      'brand': 'Acura',
      'models': [
        '2.2CL',
        '2.3CL',
        '3.0CL',
        '3.2CL'
      ]
    },
    {
      'brand': 'Alfa Romeo',
      'models': [
        '164',
        '8C Competizione',
        'GTV-6',
        'Milano',
        'Spider'
      ]
    },
    {
      'brand': 'AMC',
      'models': [
        'Alliance',
        'Concord',
        'Eagle',
        'Encore',
        'Spirit'
      ]
    },
    {
      'brand': 'Aston Martin',
      'models': [
        'DB7',
        'DB9',
        'DBS',
        'Lagonda',
        'Rapide',
        'V12 Vantage',
        'V8 Vantage',
        'Vanquish',
        'Virage'
      ]
    },
    {
      'brand': 'Audi',
      'models': [
        '100',
        'Q7',
        'Quattro',
        'R8',
        'RS 4',
        'RS 5',
        'RS 6',
        'S4',
        'S5',
        'S6',
        'S7',
        'S8',
        'TT',
        'TT RS',
        'TTS',
        'V8 Quattro'
      ]
    },
    {
      'brand': 'Avanti',
      'models': [
        'Convertible',
        'Coupe',
        'Sedan'
      ]
    },
    {
      'brand': 'Bentley',
      'models': [
        'Arnage',
        'Azure',
        'Brooklands',
        'Continental',
        'Corniche',
        'Eight',
        'Mulsanne',
        'Turbo R'
      ]
    }];
  constructor() { }

  ngOnInit() {
  }
}
