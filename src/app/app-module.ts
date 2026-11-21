import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { App } from './app';
import { About } from './about/about.componemet';
import { Product } from './product/product.componemet';
import { Navbar } from './navbar/navbar.componemet';
import { Header } from './header/header.componemet';
import { Menu } from './menu/menu.componemet';
import { Contact } from './contact/contact.componemet';

@NgModule({
  declarations: [
    App,
    Navbar,
    Header,
    About,
    Menu,
    Product,
    Contact
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
  ],
  bootstrap: [App]
})
export class AppModule { }
