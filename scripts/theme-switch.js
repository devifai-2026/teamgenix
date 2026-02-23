import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Only fix specific known problematic text-white in card/section contexts
// Leave hero text-white alone (it's on dark image overlays)

const fixes = {
  'src/pages/Services.jsx': [
    ['<h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">', '<h2 className="text-4xl md:text-5xl font-bold text-[#0f0f1e] font-heading mb-4">'],
    ['<span className="font-semibold text-sm font-heading text-white leading-tight">', '<span className="font-semibold text-sm font-heading text-[#0f0f1e] leading-tight">'],
    ['<h3 className="text-2xl font-bold text-white font-heading">', '<h3 className="text-2xl font-bold text-[#0f0f1e] font-heading">'],
    ['<h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">Need a Custom Solution?</h2>', '<h2 className="text-4xl md:text-5xl font-bold text-[#0f0f1e] font-heading mb-6">Need a Custom Solution?</h2>'],
  ],
  'src/pages/About.jsx': [
    ['<h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6 leading-tight">', '<h2 className="text-4xl md:text-5xl font-bold text-[#0f0f1e] font-heading mb-6 leading-tight">'],
    ['<p className="text-2xl md:text-4xl font-heading font-bold text-white italic leading-tight mb-8">', '<p className="text-2xl md:text-4xl font-heading font-bold text-[#0f0f1e] italic leading-tight mb-8">'],
    ['<h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">', '<h2 className="text-4xl md:text-5xl font-bold text-[#0f0f1e] font-heading mb-4">'],
    ['<h3 className="text-xl font-bold text-white font-heading mb-3">', '<h3 className="text-xl font-bold text-[#0f0f1e] font-heading mb-3">'],
  ],
  'src/pages/WhyTeamgenix.jsx': [
    ['<h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6 leading-tight">', '<h2 className="text-4xl md:text-5xl font-bold text-[#0f0f1e] font-heading mb-6 leading-tight">'],
    ['group-hover:text-white', 'group-hover:text-[#0f0f1e]'],
  ],
  'src/pages/Industries.jsx': [
    ['<h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">', '<h2 className="text-3xl md:text-4xl font-bold text-[#0f0f1e] font-heading mb-4">'],
    ['<h3 className="text-sm font-bold text-white leading-tight font-heading mb-2">', '<h3 className="text-sm font-bold text-[#0f0f1e] leading-tight font-heading mb-2">'],
    ['<h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">', '<h2 className="text-4xl md:text-5xl font-bold text-[#0f0f1e] font-heading mb-4">'],
  ],
};

Object.entries(fixes).forEach(([f, replacements]) => {
  const fpath = join('d:/Devifai/TeamGenix', f);
  let content = readFileSync(fpath, 'utf8');
  replacements.forEach(([from, to]) => {
    content = content.split(from).join(to);
  });
  writeFileSync(fpath, content, 'utf8');
  console.log('Fixed: ' + f);
});

console.log('All light-theme text fixes done!');
