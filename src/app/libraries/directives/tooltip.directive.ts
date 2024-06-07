import { Directive, HostListener, Input, Renderer2 } from '@angular/core';

/**
 * Directive for displaying a tooltip on an element.
 */
@Directive({
  selector: '[tooltip]',
  standalone: true,
})
export class TooltipDirective {
  /**
   * The text to display in the tooltip.
   */
  @Input() tooltipText: string = '';

  /**
   * Determines whether the tooltip can overlap with other elements.
   */
  @Input() tooltipShow: boolean = false;

  /**
   * The delay in milliseconds before showing the tooltip.
   */
  @Input() tooltipDelay: number = 0;

  private tooltipElement: HTMLElement | null = null;
  private showTimeout: any;

  constructor(private renderer: Renderer2) {}

  /**
   * Event listener for mouseenter event.
   * Shows the tooltip if tooltipOverlap is true.
   * Updates the tooltip position based on the mouse coordinates.
   * @param event The mouse event.
   */
  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
    if (this.textOverlap(event.target as HTMLElement) || this.tooltipShow) {
      this.showTimeout = setTimeout(() => {
        this.showTooltip();
        this.updateTooltipPosition(event.clientX, event.clientY);
      }, this.tooltipDelay);
    }
  }

  /**
   * Event listener for mouseleave event.
   * Clears the timeout for showing the tooltip.
   * Hides the tooltip.
   */
  @HostListener('mouseleave') onMouseLeave() {
    clearTimeout(this.showTimeout);
    this.hideTooltip();
  }

  /**
   * Event listener for mousemove event.
   * Updates the tooltip position based on the mouse coordinates.
   * @param event The mouse event.
   */
  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    this.updateTooltipPosition(event.clientX, event.clientY);
  }

  /**
   * Shows the tooltip if it's not already displayed.
   */
  private showTooltip() {
    if (!this.tooltipElement) {
      this.createTooltip();
    }
  }

  /**
   * Hides the tooltip.
   */
  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }

  /**
   * Creates the tooltip element and appends it to the body.
   */
  private createTooltip() {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'custom-tooltip');
    if (this.tooltipElement) {
      this.tooltipElement.innerHTML = this.tooltipText;
      console.log(this.tooltipText);
    }
    this.renderer.appendChild(document.body, this.tooltipElement);
  }

  /**
   * Updates the position of the tooltip based on the mouse coordinates.
   * @param x The x-coordinate of the mouse.
   * @param y The y-coordinate of the mouse.
   */
  private updateTooltipPosition(x: number, y: number) {
    if (this.tooltipElement) {
      const tooltipWidth = this.tooltipElement.offsetWidth;
      const tooltipHeight = this.tooltipElement.offsetHeight;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const scrollX = window.scrollX || document.documentElement.scrollLeft;
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      let top = y + scrollY - tooltipHeight - 10;
      let left = x + scrollX + 10;

      if (top < 0) {
        top = y + scrollY + 10;
      }

      if (left + tooltipWidth > windowWidth) {
        left = x + scrollX - tooltipWidth - 10;
      }

      this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
    }
  }

  /**
   * Checks if the text in the element overlaps.
   * @param htmlElement The HTML element to check for text overlap.
   * @returns A boolean indicating whether text overlaps in the element.
   */
  private textOverlap(htmlElement: HTMLElement): boolean {
    if (htmlElement)
      return htmlElement.scrollWidth > htmlElement.offsetWidth;
    return false;
  }
}
