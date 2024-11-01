import React from 'react';
import { fetchAllPosts } from '../utils/actions';
import PostCard from '../global/PostCard';
import { TbNotesOff } from 'react-icons/tb';


export default async function page({searchParams } : {searchParams?: {search: string}}) {
    const search = searchParams?.search || '';
    const posts = await fetchAllPosts({search});
    console.log({searchParams});
    if(posts.length === 0) return <div className='posts-container'>
      <div className="flex flex-col items-center gap-1">
    <TbNotesOff size={32} />
    <p>No properties match your search.</p>
    </div>
      
      </div>
  return <div className='astronaut'>
    Salut
   <div className="backg">
  <div className="planet">
    <div className="r1"></div>
    <div className="r2"></div>
    <div className="r3"></div>
    <div className="r4"></div>
    <div className="r5"></div>
    <div className="r6"></div>
    <div className="r7"></div>
    <div className="r8"></div>
    <div className="shad"></div>
  </div>
  <div className="stars">
    <div className="s1"></div>
    <div className="s2"></div>
    <div className="s3"></div>
    <div className="s4"></div>
    <div className="s5"></div>
    <div className="s6"></div>
  </div>
  <div className="an">
    <div className="tank"></div>
    <div className="astro">
        
        <div className="helmet">
          <div className="glass">
            <div className="shine"></div>
          </div>
        </div>
        <div className="dress">
          <div className="c">
            <div className="btn1"></div>
            <div className="btn2"></div>
            <div className="btn3"></div>
            <div className="btn4"></div>
          </div>
        </div>
        <div className="handl">
          <div className="handl1">
            <div className="glovel">
              <div className="thumbl"></div>
              <div className="b2"></div>
            </div>
          </div>
        </div>
        <div className="handr">
          <div className="handr1">
            <div className="glover">
              <div className="thumbr"></div>
              <div className="b1"></div>
            </div>
          </div>
        </div>
        <div className="legl">
          <div className="bootl1">
            <div className="bootl2"></div>
          </div>
        </div>
        <div className="legr">
          <div className="bootr1">
            <div className="bootr2"></div>
          </div>
        </div>
        <div className="pipe">
          <div className="pipe2">
            <div className="pipe3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
}
