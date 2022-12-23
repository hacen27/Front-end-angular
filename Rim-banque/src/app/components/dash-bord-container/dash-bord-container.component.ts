import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { DashCardComponent } from '../dash-card/dash-card.component';

@Component({
  selector: 'app-dash-bord-container',
  templateUrl: './dash-bord-container.component.html',
  styleUrls: ['./dash-bord-container.component.css']
})
export class DashBordContainerComponent implements OnInit,AfterViewInit{

  /**
   *
   */
  // @ViewChild(NavbarComponent) navbarComponent!:NavbarComponent ;

  messages = ['20', '200', '1900', '1500', '500'];

  @ViewChildren(DashCardComponent) dashCardComponents!:QueryList<DashCardComponent>;

  // @ViewChild(NavbarComponent,{static:true}) navbarComponent!:NavbarComponent ;
  @ViewChild('messageContainer', { read: ViewContainerRef, static: true }) messageContainer!: ViewContainerRef;
  @Input() componentList: any[] = [];


  // @Inject(cfr: ComponentFactoryResolver)
  constructor(public viewContainerRef: ViewContainerRef,private renderer:Renderer2) {
    // super();
    this.messageContainer = viewContainerRef;
    
    
  }
  ngOnInit(): void {
    // this.loadNewDashComponentToList();
    console.log(this.messageContainer)

  }
  ngAfterViewInit(): void {
console.log('this.dashComponents',this.dashCardComponents.length)
this.loadNewDashComponentToList();
  }


  private createComponent (compClass:any) {
    // const compFactory = this.cfr.resolveComponentFactory(compClass);
    
    return this.viewContainerRef.createComponent(compClass);

  }


  loadNewDashComponentToList () {
    this.messages.forEach((msg, idx) => {
      // this.destroyCompFromList(this.componentList[idx]);
      
      const comp = this.createComponent(DashCardComponent);
      console.log(comp);
      // const div = this.renderer.createElement('div');
      // this.renderer.addClass(div,'col-lg-4 col-md-6 mb-4')

      // (comp.instance as any).counter = msg;
      comp.setInput('counter',msg);
      // this.renderer.appendChild(div, comp);

      // comp.instance = this.viewContainerRef
      // comp.changeDetectorRef.detectChanges();

      this.componentList[idx] = comp;
    });

}
}
