$(document).ready(function(){const pathname=window.location.pathname;if(pathname=='/wohnungen/'){const request=$.ajax({url:window.location.origin+"/wp-json/api/v1/get-all-flats",type:"post",data:''});$('.spinner-border').removeClass('d-none');request.always(function(response){$(response.responseText).insertAfter(".all-flats .red-text ");$('.spinner-border').addClass('d-none')});const device={};if($(window).width()<1020){device.device='mobile'}else{device.device='desktop'}
const request_1=$.ajax({url:window.location.origin+"/wp-json/api/v1/get-free-flats",type:"post",data:JSON.stringify(device)});$('.spinner-border').removeClass('d-none');request_1.always(function(response){$(response).insertAfter(".free-flats .spinner ");$('.spinner-border').addClass('d-none')})}
if(pathname=='/parkplaetze/'){const request=$.ajax({url:window.location.origin+"/wp-json/api/v1/get-all-parking-spaces",type:"post",data:''});$('.spinner-border').removeClass('d-none');request.always(function(response){$(response.responseText).insertAfter(".all-flats .red-text ");$('.spinner-border').addClass('d-none')});const device={};if($(window).width()<1020){device.device='mobile'}else{device.device='desktop'}
const request_1=$.ajax({url:window.location.origin+"/wp-json/api/v1/get-free-parking-spaces",type:"post",data:JSON.stringify(device)});$('.spinner-border').removeClass('d-none');request_1.always(function(response){$(response).insertAfter(".free-flats .spinner ");$('.spinner-border').addClass('d-none')})}
if(pathname=='/gewerbe/'){const request=$.ajax({url:window.location.origin+"/wp-json/api/v1/get-all-offices",type:"post",data:''});$('.spinner-border').removeClass('d-none');request.always(function(response){$(response.responseText).insertAfter(".all-flats .red-text ");$('.spinner-border').addClass('d-none')});const device={};if($(window).width()<1020){device.device='mobile'}else{device.device='desktop'}
const request_1=$.ajax({url:window.location.origin+"/wp-json/api/v1/get-free-offices",type:"post",data:JSON.stringify(device)});$('.spinner-border').removeClass('d-none');request_1.always(function(response){$(response).insertAfter(".free-flats .spinner ");$('.spinner-border').addClass('d-none')})}})