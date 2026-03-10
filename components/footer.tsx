export default function Footer(){

return(

<footer className="border-t border-white/10 mt-24">

<div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

<div>

<h3 className="text-lg font-semibold mb-2">
EDA AI
</h3>

<p className="text-gray-400 text-sm">
Your AI-powered data analysis platform
</p>

</div>


<div>

<h4 className="font-semibold mb-3">
Product
</h4>

<ul className="space-y-2 text-gray-400">

<li>Features</li>
<li>Pricing</li>
<li>Documentation</li>

</ul>

</div>


<div>

<h4 className="font-semibold mb-3">
Company
</h4>

<ul className="space-y-2 text-gray-400">

<li>About</li>
<li>Blog</li>
<li>Careers</li>

</ul>

</div>


<div>

<h4 className="font-semibold mb-3">
Legal
</h4>

<ul className="space-y-2 text-gray-400">

<li>Privacy</li>
<li>Terms</li>
<li>Security</li>

</ul>

</div>

</div>

<div className="text-center text-gray-500 text-sm pb-8">
© 2026 EDA AI. All rights reserved.
</div>

</footer>

)

}