import { trigger, transition, style, animate, state } from "@angular/animations";

/*in the sidenav */
const sidenav = [
    trigger('sidenav', [
      state('open', style({
        width: '300px',
      })),
      state('closed', style({
        width: '40px',
      })),
      transition('* => closed', [animate('0.2s')]),
      transition('* => open', [animate('0.2s')]),
    ])
]
const dashboard = [
    trigger('dashboard', [
      state('open', style({
        marginLeft: '300px',
      })),
      state('closed', style({
        marginLeft: '40px',
      })),
      transition('* => closed', [animate('0.2s')]),
      transition('* => open', [animate('0.2s')]),
    ])
]


export {
    sidenav,
    dashboard
}