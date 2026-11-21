import{mkdirSync as M,readdirSync as R,readFileSync as F,writeFileSync as W}from'fs'
let E=process.env,I=E.MAKEFUN_INPUT_DIR||'/input',O=E.MAKEFUN_OUTPUT_DIR||'/output'
for(let i of R(I).sort()){let r=F(I+`/${i}/level.txt`,'utf8').split`
`.filter(x=>x),w=Math.max(...r.map(x=>x.length)),g=[...r.map(x=>x.padEnd(w,'#')).join``],D=[-w,w,-1,1],P=g.indexOf('@'),h=P/w|0,B=g.map(c=>'$*'.includes(c)),o='',k=(a,b)=>{let p={[a]:''},q=[a];for(let x of q)D.map((d,j)=>{let n=x+d;g[n]!='#'&&!B[n]&&!(n in p)&&(p[n]=p[x]+'udlr'[j],q.push(n))});return p[b]}
g.map((c,d)=>{let y=d/w|0;if(c!='#'&&(y-h)**2==1){let H=d+(y<h?w:-w),z={[H]:1,[d]:1},C=[d],A=(p,s)=>{let v={[p]:1},q=[p];for(let x of q)D.map(e=>{let n=x+e;z[n]&&!s.includes(n)&&!v[n]&&(v[n]=1,q.push(n))});return q},S,V={},f,i=0
for(let x of C)D.map(e=>{let n=x+e;g[n]!='#'&&!z[n]&&(n/w|0)!=h&&(z[n]=1,C.push(n))})
for(S=[[C.filter(x=>B[x]),H]];!f;i++){let[s,p]=S[i];if(s.every(x=>'.*'.includes(g[x])))f=S[i];else for(let x of A(p,s))D.map((e,j)=>{let b=x+e,t=b+e,n,K;if(s.includes(b)&&z[t]&&!s.includes(t)){n=s.map(y=>y-b?y:t).sort((a,c)=>a-c);K=n+':'+Math.min(...A(b,n));V[K]||S.push(V[K]=[n,b,S[i],j])}})}
for(r=[];f[2];f=f[2])r.unshift(f);o+=k(P,H);P=H;for(let[,b,,j]of r)o+=k(P,b-D[j])+'UDLR'[j],B[b]=0,B[b+D[j]]=1,P=b}})
M(O+'/'+i,{recursive:!0});W(O+`/${i}/solution.txt`,o)}
