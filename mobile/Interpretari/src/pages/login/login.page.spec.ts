import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
    let component: LoginPage;
    let fixture: ComponentFixture<LoginPage>;
    let router: Router;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LoginPage],
            imports: [
                IonicModule.forRoot(),
                AppRoutingModule,
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(LoginPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
