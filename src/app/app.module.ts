import { userReducer } from '@app/redux/reducers/user.reducer';
import { StoreModule } from '@ngrx/store';
import { GlobalModule } from './global/global.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '@app/redux/effects/user.effects';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { environment } from 'environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CookieService } from 'ngx-cookie-service';

export function createApollo(httpLink: HttpLink) {
	return {
		link: httpLink.create({ uri: environment.graphql.url }),
		cache: new InMemoryCache(),
	};
}

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule, // provides HttpClient for HttpLink
		ApolloModule,
		HttpLinkModule,
		GlobalModule,
		EffectsModule.forRoot([
			UserEffects
		]),
		StoreModule.forRoot({
			user: userReducer
		}),
		StoreDevtoolsModule.instrument({ maxAge: 5 }),
	],
	providers: [{
		provide: APOLLO_OPTIONS,
		useFactory: createApollo,
		deps: [HttpLink],
	}, CookieService],
	bootstrap: [AppComponent]
})
export class AppModule { }
