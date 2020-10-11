import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { User } from 'src/app/admin/modules/User.module';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user=new User;
    msg:any;
  constructor(private myservice:SessionService,private router:Router) { }
  
  login(){
   if(this.user.username=="admin" && this.user.password=="admin"){
    sessionStorage.setItem('adminusername',this.user.username);
    this.router.navigate(['/admin'])
   }
   else{
       alert('login ou mot de passe incorrect')
   }    
  }
  ngOnInit() {
    $(document).ready(function(){   
        "use strict"; 
        /*==================================================================
        [ Focus Contact2 ]*/
        $('.input100').each(function(){
            $(this).on('blur', function(){
                if($(this).val().trim() != "") {
                    $(this).addClass('has-val');
                }
                else {
                    $(this).removeClass('has-val');
                }
            })    
        })
      
      
        /*==================================================================
        [ Validate ]*/
        var input = $('.validate-input .input100');
    
        $('.validate-form').on('submit',function(){
            var check = true;
    
            for(var i=0; i<input.length; i++) {
                if(validate(input[i]) == false){
                    showValidate(input[i]);
                    check=false;
                }
            }
    
            return check;
        });
    
    
        $('.validate-form .input100').each(function(){
            $(this).focus(function(){
               hideValidate(this);
            });
        });
    
        function validate (input) {
            if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                    return false;
                }
            }
            else {
                if($(input).val().trim() == ''){
                    return false;
                }
            }
        }
    
        function showValidate(input) {
            var thisAlert = $(input).parent();
    
            $(thisAlert).addClass('alert-validate');
        }
    
        function hideValidate(input) {
            var thisAlert = $(input).parent();
    
            $(thisAlert).removeClass('alert-validate');
        }      
    });
  }

}
