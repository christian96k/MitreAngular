'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">deas-demo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CardComponent.html" data-type="entity-link" >CardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChipComponent.html" data-type="entity-link" >ChipComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChipsetComponent.html" data-type="entity-link" >ChipsetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ClusterComponent.html" data-type="entity-link" >ClusterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeasComponent.html" data-type="entity-link" >DeasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HubComponent.html" data-type="entity-link" >HubComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoaderComponent.html" data-type="entity-link" >LoaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MitreAttackComponent.html" data-type="entity-link" >MitreAttackComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalComponent.html" data-type="entity-link" >ModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserLoginSystemComponent.html" data-type="entity-link" >UserLoginSystemComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/TooltipDirective.html" data-type="entity-link" >TooltipDirective</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/Auth0_Guard.html" data-type="entity-link" >Auth0_Guard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HubEffects.html" data-type="entity-link" >HubEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HubFacade.html" data-type="entity-link" >HubFacade</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HubService.html" data-type="entity-link" >HubService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MitreAttackService.html" data-type="entity-link" >MitreAttackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserEffects.html" data-type="entity-link" >UserEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserFacade.html" data-type="entity-link" >UserFacade</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Auth0Error.html" data-type="entity-link" >Auth0Error</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CardConfig.html" data-type="entity-link" >CardConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CardFooter.html" data-type="entity-link" >CardFooter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CardHeader.html" data-type="entity-link" >CardHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChipConfig.html" data-type="entity-link" >ChipConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChipsetConfig.html" data-type="entity-link" >ChipsetConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChipsetContent.html" data-type="entity-link" >ChipsetContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChipsetHeader.html" data-type="entity-link" >ChipsetHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClusterConfig.html" data-type="entity-link" >ClusterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Definition.html" data-type="entity-link" >Definition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExternalReference.html" data-type="entity-link" >ExternalReference</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HubState.html" data-type="entity-link" >HubState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KillChainPhase.html" data-type="entity-link" >KillChainPhase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MitreAttackConfig.html" data-type="entity-link" >MitreAttackConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MitreAttackData.html" data-type="entity-link" >MitreAttackData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MitreAttackFooter.html" data-type="entity-link" >MitreAttackFooter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MitreAttackHeader.html" data-type="entity-link" >MitreAttackHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MitreAttackInfo.html" data-type="entity-link" >MitreAttackInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MitreAttackInfo-1.html" data-type="entity-link" >MitreAttackInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MitreCells.html" data-type="entity-link" >MitreCells</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MitreCellsContent.html" data-type="entity-link" >MitreCellsContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModalConfig.html" data-type="entity-link" >ModalConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModalContent.html" data-type="entity-link" >ModalContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserState.html" data-type="entity-link" >UserState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});