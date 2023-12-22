import React, { } from 'react';
import avien from '../image/avien.png';
import paulo from '../image/paulo.png';
import jerico from '../image/jerico.png';
import francis from '../image/francis.png';
import lhizel from '../image/lhizel.png';
import healthy from '../image/healthy.jpg';

export default function aboutus (){
    return(
        <div>
          <main>
          <section className='container py-5' align='center'>
            <div className="row">
              <div className="col-lg-6">
              <div>
                  <br/><br/><br/><br/><br/>
                  <h1>What Is Our Website All About?</h1>
                  <p>
                  Our blog is a rich tapestry celebrating the diverse and delectable world of food. We delve into the cultural and social significance of food, highlighting its importance in bringing people together and nourishing both body and soul. Through engaging content, we offer insights into various cooking techniques, allowing our readers to broaden their culinary skills and knowledge. Additionally, we feature a "food of the week" to showcase and celebrate a particular dish, ingredient, or culinary tradition, providing a feast for the senses and a source of inspiration for culinary exploration.
                  </p>
              </div>
              </div>

              <div className="col-lg-6">
              <div>
                <img src={healthy} alt="Food" className="img-fluid food-img" style={{width: '100%', height: 'auto'}} />
              </div>
              </div>
            </div>
          </section>


          <section className='container py-5' align='center'>
          <div>
            <h1>Our Main Goal</h1>
            <p>
            Our main goal is to inspire and empower our audience to create healthy and delectable meals that nourish both body and spirit. We aim to demonstrate that cooking can be an enjoyable and rewarding endeavor, dispelling the notion that it is overwhelming or daunting. Through our content, we strive to showcase the joy of culinary exploration and the satisfaction of preparing wholesome, flavorful dishes. By providing accessible and inspirational food ideas, we seek to foster a community of food enthusiasts who embrace the pleasures of cooking and savoring nutritious, delicious meals.
            </p>
            </div>
          </section>

          <section className='container py-5'>
          <div className='row'>
            <h1>Team Members</h1> <br/>
              <div className='col-lg-6' align='center'>
                  <h5>
                  Member 1:
                  </h5>
                  <h2>BATUL, Avien Flaire C.</h2>
                  <p>About the member:  Hi there! The captivating tales of love and drama in Korean dramas captivate me,
                     and I am a devoted fan of these shows. In my spare time, I'm a passionate foodie who loves to discover
                      new flavors and cuisines. While I'm not immersed in stories or indulging in tasty foods, 
                      I'm a dedicated student of information technology, working to improve my programming abilities 
                      in preparation for a potential job in the field. Come along with me on this exciting adventure 
                      where the universes of technology, the delight of food, and the enchantment of narrative all converge.</p>
                    <div>
                      <img src={avien} alt="Logo" width="300" height="300" className="d-inline-block align-top" />
                  </div>
              </div>
              <div className='col-lg-6' align='center'>
                  <h5>
                  Member 2:
                  </h5>
                  <h2>BONDOC, Paulo C.</h2>
                  <p>About the member: Hello! I’m a passionate gamer with an insatiable appetite for exploring
                     diverse cuisines. Through this blog, I bring you along on a delightful journey through diverse cuisines,
                      exploring the intricate flavors that transform each gaming session into a truly unforgettable
                       experience. Join me in this immersive blend of virtual adventures and culinary delights, where every 
                       post is a celebration of the extraordinary fusion between gaming and good food. Let's savor the moments 
                      and discover the flavors that elevate our gaming escapades to new heights!</p>
                    <div>
                      <img src={paulo} alt="Logo" width="300" height="300" className="d-inline-block align-top" />
                  </div>
              </div>
          </div>

          <section className='container py-5'>
          <div className='row'>
              <div className='col-lg-6' align='center'>
                  <h5>
                  Member 3:
                  </h5>
                  <h2>DAAG, Jerico M.</h2>
                  <p>About the member: Hey, I'm Jerico Daag, your friendly travel vlogger and avid food explorer. 
                    My passion lies in capturing the essence of global cuisines through vibrant vlogs. From sizzling 
                    street food to exquisite restaurant finds, I bring you along on a visual feast. Don't forget to check
                     out my blogs for a closer look at the flavors that make each destination unique. Join me as I embark on
                      a delectable journey, sharing the love for diverse dishes from around the world.</p>
                    <div>
                      <img src={jerico} class='img-fluid' alt="Logo" width="300" height="300" className="d-inline-block align-top" />
                  </div>
              </div>

              <div className='col-lg-6' align='center'>
                  <h5>
                  Member 4:
                  </h5>
                  <h2>POLINTAN, Francis Miguel S.</h2>
                  <p>About the member: My name is Francis Miguel F Polintan. You can call me Francis. I live in the city of San Fernando 
                    of pampanga which is known for being the culinary capital of the Philippines. There are many foods 
                    to taste here such as sisig, kare-kare, menudo, and others. I like to share my experiences of foods 
                    to others so that they could share their opinion about them.</p>
                    <div>
                      <img src={francis} alt="Logo" width="300" height="300" className="d-inline-block align-top" />
                  </div>
              </div>
          </div>
          </section>
          </section>

          <section className='container'>
          <div className='row' align='center'>
                  <h5>
                  Member 5:
                  </h5>
                  <h2>TABUAL, Lhizel N.</h2>
                  <p>About the member:  Hi! I'm Lhizel, a food enthusiast with a special fondness for Pork Sinigang. 
                    Join us as we share our love for cooking, recipes, and tasty discoveries.
                     Let's explore the world of flavors together!</p>
                    <div>
                      <img src={lhizel} alt="Logo" width="300" height="300" className="d-inline-block align-top" />
                    </div>
          </div>
          </section>


          {/*Footer*/}
          <footer className="footer text-center py-3">
                  <p>&copy; 2023 My Food Blog. All rights reserved.</p>
          </footer>
        </main>
        </div>
    )
}