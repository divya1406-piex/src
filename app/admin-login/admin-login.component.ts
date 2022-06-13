import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin=new Admin();
  message=""
 // navigate:any;
    constructor(private adminService:AdminService,private route:Router) { }
  
    ngOnInit(): void {
    }
  adminLogin()
  {
  this.adminService.adminLoginService(this.admin).subscribe(
    data =>{console.log("Login Succes",this.admin),
    alert("Successfully logined"),
    this.route.navigate(['/adminpage'])
  },
    error =>{console.log("Login failed",this.admin),
    this.message="login failed. enter valid email and password"}
  )
  }
}
