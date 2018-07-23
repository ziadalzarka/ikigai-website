import { PostsEffects } from './redux/effects/posts.effects';
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
import { ApolloLink, concat } from 'apollo-link';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { environment } from 'environments/environment';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { adminUsersReducer } from '@app/redux/reducers/admin-users.reducer';
import { AdminUsersEffects } from '@app/redux/effects/admin-users.effects';
import { footerReducer } from '@app/redux/reducers/admin-footer.reducer';
import { FooterEffects } from '@app/redux/effects/footer.effects';
import { clientApplicationsReducer } from '@app/redux/reducers/client-applications.reducer';
import { ClientApplicationsEffects } from '@app/redux/effects/client-applications.effects';
import { postsReducer } from '@app/redux/reducers/posts.reducer';

export function createApollo(httpLink: HttpLink) {
	const http = httpLink.create({ uri: environment.graphql.url });

	const authMiddleware = new ApolloLink((operation, forward) => {
		// add the authorization to the headers
		const token = localStorage.getItem('token');
		if (token) {
			operation.setContext({
				headers: new HttpHeaders().set('Authorization', token)
			});
		}

		return forward(operation);
	});

	return {
		link: concat(authMiddleware, http),
		cache: new InMemoryCache(),
	};
}

@NgModule({
	declarations: [
		AppComponent,
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
			UserEffects,
			AdminUsersEffects,
			FooterEffects,
			ClientApplicationsEffects,
			PostsEffects
		]),
		StoreModule.forRoot({
			user: userReducer,
			adminUsers: adminUsersReducer,
			footer: footerReducer,
			clientApplications: clientApplicationsReducer,
			posts: postsReducer
		}),
		StoreDevtoolsModule.instrument({ maxAge: 5 }),
	],
	providers: [{
		provide: APOLLO_OPTIONS,
		useFactory: createApollo,
		deps: [HttpLink],
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
