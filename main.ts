import*as f from'fs'
let E=process.env,I=E.MAKEFUN_INPUT_DIR||'/input',O=E.MAKEFUN_OUTPUT_DIR||'/output'
for(let i of f.readdirSync(I)){let g=f.readFileSync(I+`/${i}/level.txt`)+'',w=g.indexOf`
`+1,D=[-w,w,-1,1],P=g.indexOf`@`,h=P/w|0,B=[...g].map(c=>c>'#'&c<'+'),o='',Q=(p,u,v={[p]:''},q=[p])=>{for(let x of q)D.map((d,j,_,n=x+d)=>u(n)&&!(n in v)&&(v[n]=v[x]+'udlr'[j],q.push(n)));return v};[...g].map((c,d,_,y=d/w|0)=>{if(c>`
`&c!='#'&(y-h)**2==1){let H=d+(y<h?w:-w),z=Q(H,n=>g[n]!='#'&&(n/w|0)-h),R=(p,s)=>Q(p,n=>n in z&&!s.includes(n)),S,V={},F,k=0,G=([,b,a,j])=>a&&(G(a),o+=Q(P,n=>g[n]!='#'&&!B[n])[b-D[j]]+'UDLR'[j],B[b]=0,B[b+D[j]]=1,P=b)
for(S=[[Object.keys(z).filter(x=>B[x]).map(x=>+x),H]];!F;k++){let[s,p]=S[k];if(s.every(x=>'.*'.includes(g[x])))F=S[k];else for(let x in R(p,s))D.map((e,j,_,b=+x+e,t=b+e,n,K)=>{if(s.includes(b)&&t in z&&!s.includes(t)){n=s.map(y=>y-b?y:t).sort();K=n+':'+Object.keys(R(b,n))[0];V[K]||S.push(V[K]=[n,b,S[k],j])}})}
G(F)}})
f.mkdirSync(i=O+'/'+i);f.writeFileSync(i+'/solution.txt',o)}
