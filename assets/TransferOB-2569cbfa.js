import{r as c,q as w,n as S,c as P,s as A,t as g,p as D,j as e,F as N,a as o,w as O,e as j,v as F}from"./index-c8e33977.js";import{B as q}from"./BreadcrumNav-bfb8bbf9.js";import{u as y,C as l,a as x}from"./formik.esm-521e0ce2.js";import{u as E}from"./useAxiosPrivate-2868b71b.js";const I=()=>{const[i,u]=c.useState(!1),m=w(),d=S(h=>h.user.user),{formData:a}=c.useContext(b);let r=a;const v=E(),t=P(),{errors:n,handleBlur:s,handleChange:f,handleSubmit:_,values:T,touched:B}=y({initialValues:{security_code:""},validationSchema:A,onSubmit:h=>{C(r,h)}}),C=async(h,k)=>{if(d.security_pin===k.security_code){u(!0);try{const{data:p}=await v.post("/transfer-others/",h);p.error?g.error(p.msg):(m(D(p.tx.sender)),g.info("Transaction created")),t("/transactions-log",{replace:!0})}catch{}return!0}else return g.error("Invalid security pin"),!1};return e(N,{children:o("form",{onSubmit:_,children:[o("div",{className:" mb-3",id:"amount_box",children:[e(l,{handleBlur:s,handleChange:f,label:"Security Pin",name:"security_code",type:"text",value:T.security_code,touched:B.security_code,error:n.security_code,id:"",placeholder:""}),e("i",{className:"fa-solid fa-lock dollarSign"})]}),e("div",{className:" mb-3",children:e("div",{className:"d-grid gap-2",children:e(x,{color:"outline-primary",text:"Submit",loading:i,type:"submit"})})})]})})},L=()=>{const[i,u]=c.useState(!1),{setformData:m,setcurrentSteps:d}=c.useContext(b),{handleBlur:a,handleChange:r,handleSubmit:v,errors:t,touched:n,values:s}=y({initialValues:{first_name:"",last_name:"",email:"",ben_account_number:"",bank_name:"",route_num:"",amount:"",purpose:""},validationSchema:O,onSubmit(f){u(!0),m(f),d(_=>_+1)}});return e(N,{children:o("form",{onSubmit:v,children:[o("div",{className:"row",children:[e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:r,label:"First name",name:"first_name",type:"text",value:s.first_name,touched:n.first_name,error:t.first_name,id:"",placeholder:""})}),e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:r,label:"Last name",name:"last_name",type:"text",value:s.last_name,touched:n.last_name,error:t.last_name,id:"",placeholder:""})}),e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:r,label:"Email (if any)",name:"email",type:"email",value:s.email,touched:n.email,error:t.email,id:"",placeholder:""})}),e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:r,label:"Beneficiary account number",name:"ben_account_number",type:"text",value:s.ben_account_number,touched:n.ben_account_number,error:t.ben_account_number,id:"",placeholder:""})}),e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:r,label:" Bank Name",name:"bank_name",type:"text",value:s.bank_name,touched:n.bank_name,error:t.bank_name,id:"",placeholder:""})}),e("div",{className:"col-lg-6 mb-3",children:e(l,{handleBlur:a,handleChange:r,label:"ABA Routing Number",name:"route_num",type:"text",value:s.route_num,touched:n.route_num,error:t.route_num,id:"",placeholder:""})})]}),o("div",{className:" mb-3",id:"amount_box",children:[e(l,{handleBlur:a,handleChange:r,label:"Amount",name:"amount",type:"number",value:s.amount,touched:n.amount,error:t.amount,id:"",placeholder:""}),e("i",{className:"fa-solid fa-dollar dollarSign"})]}),e("div",{className:" mb-3",children:e(l,{handleBlur:a,handleChange:r,label:"Purpose of Transfer",name:"purpose",type:"text",value:s.purpose,touched:n.purpose,error:t.purpose,placeholder:"....",id:""})}),e("div",{className:" mb-3",children:e("div",{className:"d-grid gap-2",children:e(x,{color:"outline-primary",text:"Submit",loading:i,type:"submit"})})})]})})},R=()=>{const{currentSteps:i}=c.useContext(b);return[e(L,{}),e(I,{})][i]},b=c.createContext(void 0),G=()=>{j("Transfer to other banks");const i=S(r=>r.user.user),[u,m]=c.useState(0),[d,a]=c.useState();return e(N,{children:e("div",{className:"container",children:o("div",{className:"row justify-content-center  ",children:[e(q,{pagenavTitle:"Transfer",currentPage:"transfer"}),e("div",{className:"mt-4"}),e("div",{className:"col-lg-4",children:o("div",{className:"amountBox",children:[e("h4",{children:"available balance"}),o("h2",{children:["$",e("span",{children:F(i.balance)})]})]})}),e("div",{className:"col-lg-8",children:o("div",{className:"transferCard",children:[e("p",{children:"Transfer to other bank"}),e(b.Provider,{value:{currentSteps:u,setcurrentSteps:m,formData:d,setformData:a},children:e(R,{})})]})})]})})})};export{b as TransferObContext,G as default};
