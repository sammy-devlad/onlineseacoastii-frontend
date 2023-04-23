import{r as o,T as I,j as e,F as N,a as c,q as k,c as P,n as x,s as D,t as y,p as j,e as A,v as F}from"./index-3598420a.js";import{B as q}from"./BreadcrumNav-712ea98e.js";import{u as g,C as l,a as S}from"./formik.esm-30aa03e9.js";import{u as L}from"./useAxiosPrivate-04600e2e.js";const O=()=>{const[i,d]=o.useState(!1),{setformData:u,setcurrentSteps:m}=o.useContext(p),{handleBlur:a,handleChange:t,handleSubmit:v,errors:r,touched:n,values:s}=g({initialValues:{first_name:"",last_name:"",country:"",city:"",ben_account_number:"",iban_number:"",bank_name:"",swift_code:"",amount:"",purpose:""},validationSchema:I,onSubmit(f){d(!0),u(f),m(_=>_+1)}});return e(N,{children:c("form",{onSubmit:v,children:[c("div",{className:"row",children:[e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:t,label:"First name",name:"first_name",type:"text",value:s.first_name,touched:n.first_name,error:r.first_name,id:"",placeholder:""})}),e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:t,label:"Last name",name:"last_name",type:"text",value:s.last_name,touched:n.last_name,error:r.last_name,id:"",placeholder:""})}),e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:t,label:"City (if any)",name:"city",type:"text",value:s.city,touched:n.city,error:r.city,id:"",placeholder:""})}),e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:t,label:"Country (if any)",name:"country",type:"text",value:s.country,touched:n.country,error:r.country,id:"",placeholder:""})}),e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:t,label:"Beneficiary account number",name:"ben_account_number",type:"text",value:s.ben_account_number,touched:n.ben_account_number,error:r.ben_account_number,id:"",placeholder:""})}),e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:t,label:"IBAN Number",name:"iban_number",type:"text",value:s.iban_number,touched:n.iban_number,error:r.iban_number,id:"",placeholder:""})}),e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:t,label:" Bank Name",name:"bank_name",type:"text",value:s.bank_name,touched:n.bank_name,error:r.bank_name,id:"",placeholder:""})}),e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:t,label:"Swift/BIC Code",name:"swift_code",type:"text",value:s.swift_code,touched:n.swift_code,error:r.swift_code,id:"",placeholder:""})})]}),c("div",{className:" mb-3",id:"amount_box",children:[e(l,{handleBlur:a,handleChange:t,label:"Amount",name:"amount",type:"number",value:s.amount,touched:n.amount,error:r.amount,id:"",placeholder:""}),e("i",{className:"fa-solid fa-dollar dollarSign"})]}),e("div",{className:" mb-3",children:e(l,{handleBlur:a,handleChange:t,label:"Purpose of Transfer",name:"purpose",type:"text",value:s.purpose,touched:n.purpose,error:r.purpose,placeholder:"....",id:""})}),e("div",{className:" mb-3",children:e("div",{className:"d-grid gap-2",children:e(S,{color:"outline-primary",text:"Submit",loading:i,type:"submit"})})})]})})},U=()=>{const[i,d]=o.useState(!1),u=k(),m=L(),a=P(),t=x(h=>h.user.user),{formData:v}=o.useContext(p);let r=v;const{errors:n,handleBlur:s,handleChange:f,handleSubmit:_,values:C,touched:T}=g({initialValues:{security_code:""},validationSchema:D,onSubmit:h=>{w(r,h)}}),w=async(h,B)=>{if(t.security_pin===B.security_code){d(!0);try{const{data:b}=await m.post("/transfer-inter/",h);b.error?y.error(b.msg):(u(j(b.tx.sender)),y.info("Transaction created")),a("/transactions-log",{replace:!0})}catch{}return!0}else return y.error("Invalid security pin"),!1};return e(N,{children:c("form",{onSubmit:_,children:[c("div",{className:" mb-3",id:"amount_box",children:[e(l,{handleBlur:s,handleChange:f,label:"Security Pin",name:"security_code",type:"text",value:C.security_code,touched:T.security_code,error:n.security_code,id:"",placeholder:""}),e("i",{className:"fa-solid fa-lock dollarSign"})]}),e("div",{className:" mb-3",children:e("div",{className:"d-grid gap-2",children:e(S,{color:"outline-primary",text:"Submit",loading:i,type:"submit"})})})]})})},V=()=>{const{currentSteps:i}=o.useContext(p);return[e(O,{}),e(U,{})][i]},p=o.createContext(void 0),G=()=>{A("International transfer");const i=x(t=>t.user.user),[d,u]=o.useState(0),[m,a]=o.useState();return e(N,{children:e("div",{className:"container",children:c("div",{className:"row justify-content-center  ",children:[e(q,{pagenavTitle:"Transfer",currentPage:"transfer"}),e("div",{className:"mt-4"}),e("div",{className:"col-lg-4",children:c("div",{className:"amountBox",children:[e("h4",{children:"available balance"}),c("h2",{children:["$",e("span",{children:F(i.balance)})]})]})}),e("div",{className:"col-lg-8",children:c("div",{className:"transferCard",children:[e("p",{children:"International transfer"}),e(p.Provider,{value:{currentSteps:d,setcurrentSteps:u,formData:m,setformData:a},children:e(V,{})})]})})]})})})};export{p as TransferInContext,G as default};
