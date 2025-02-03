// Importation des modules nécessaires depuis Angular
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Définition de la directive avec un sélecteur personnalisé 'pokemonBorderCard'
@Directive({
  selector: '[pokemonBorderCard]',  // Ce sélecteur permet d'appliquer la directive sur un élément HTML qui possède l'attribut 'pokemonBorderCard'
  standalone: false  // L'indication que cette directive peut ne pas être autonome dans un contexte particulier
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor = '#009688';
   private defaultHeigth: number = 240;

  // Le constructeur reçoit l'ElementRef qui donne un accès direct à l'élément DOM auquel la directive est appliquée
  constructor(private el: ElementRef ) { 
    // Définition d'une hauteur par défaut pour l'élément
    this.setHeight(this.defaultHeigth);
    // Définition d'une bordure par défaut pour l'élément
    this.setBorder(this.initialColor);
  }

  @Input('pokemonBorderCard') borderColor: string;
  // Méthode pour définir la hauteur de l'élément avec la valeur passée en paramètre
  setHeight(height: number) {
    // L'élément DOM est accédé via nativeElement et sa hauteur est définie
    this.el.nativeElement.style.height = `${height}px`;
  }
  
  // Méthode pour définir la couleur de la bordure de l'élément
  setBorder(Color: string) {
    // La bordure de l'élément est définie avec la couleur passée en paramètre
    this.el.nativeElement.style.border = `solid 4px ${Color}`;
  }

  // Gestionnaire d'événements pour l'événement 'mouseenter' qui se déclenche lorsque la souris entre dans l'élément
  @HostListener('mouseenter') onMouseEnter() {
    // Lorsque la souris entre dans l'élément, la couleur de la bordure est changée
    this.setBorder(this.borderColor || this.defaultColor);
  }

  // Gestionnaire d'événements pour l'événement 'mouseleave' qui se déclenche lorsque la souris quitte l'élément
  @HostListener('mouseleave') onMouseleave() {
    // Lorsque la souris quitte l'élément, la couleur de la bordure est réinitialisée à sa couleur d'origine
    this.setBorder(this.initialColor);
  }

}
