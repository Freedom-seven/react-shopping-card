import image1 from '../../Images/1.png';
import image2 from '../../Images/un 4.png';
import image3 from '../../Images/un 6.png';
import image4 from '../../Images/un 8.png';
import image5 from '../../Images/un 10.png';
import image6 from '../../Images/un 11.png';
import image7 from '../../Images/Untitled-1.png';
import image8 from '../../Images/Untitled-2.png';
import image9 from '../../Images/Untitled-3.png';
import image10 from '../../Images/Untitled-5.png';
import image11 from '../../Images/Untitled-7.png';
import image12 from '../../Images/Untitled-9.png';
import image13 from '../../Images/Untitled-12.png';
import image14 from '../../Images/Untitled-14.png';
import image15 from '../../Images/Untitled-15.png';
import React from "react";
import './Cards.css';

const Cards = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-2 star-col">
          <div className="col-md-1 size">
            <p>XS</p>
          </div>
          <div className="col-md-1 size">
            <p>S</p>
          </div>
          <div className="col-md-1 size">
            <p>M</p>
          </div>
          <div className="col-md-1 size">
            <p>ML</p>
          </div>
          <br />
          <br />
          <br />
          <div className="col-md-1 size">
            <p>L</p>
          </div>
          <div className="col-md-1 size">
            <p>XL</p>
          </div>
          <div className="col-md-2 size">
            <p>XXL</p>
          </div>
          <div className="col-md-4"></div>
          <br />
          <br />
          <br />
          <p className="starParagraph">
            Leave a star on Github if this
            <br /> repository was useful :)
          </p>
          <button type="button" className="btn btn-default btn-lg">
            <span
              className="glyphicon glyphicon-star"
              aria-hidden="true"
            ></span>{" "}
            Star
          </button>
          <button type="button" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon" aria-hidden="true"></span> 848
          </button>
        </div>
        <div className="col-md-10 main">
          <div className="col-md-3 ">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img
                src="Images/1.png"
                alt="A man in T-shirt"
                className="imageHeight"
              />
              <div className="caption content">
                <p>Black T-shirt</p>
                <hr />
                <p>
                  $<strong>10</strong>.90
                </p>
                <p className="option">or 9*$1.21</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img src="Images/un 10.png" alt="A man in T-shirt" />
              <div className="caption content">
                <p>Deem blue T-shirt</p>
                <hr />
                <p>
                  $<strong>29</strong>.45
                </p>
                <p className="option">or 5*$5.89</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img src="Images/un 11.png" alt="A man in T-shirt" />
              <div className="caption content">
                <p>Wine T-shirt</p>
                <hr />
                <p>
                  $<strong>9</strong>.00
                </p>
                <p className="option">or 5*$3.00</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img src="Images/un 4.png" alt="A man in T-shirt" />
              <div className="caption content">
                <p>White T-shirt</p>
                <hr />
                <p>
                  $<strong>14</strong>.00
                </p>
                <p className="option">or 5*$2.80 </p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10 main">
          <div className="col-md-3 ">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img
                src="Images/un 6.png"
                alt="A man in T-shirt"
                className="imageHeight"
              />
              <div className="caption content">
                <p>Orange T-shirt</p>
                <hr />
                <p>
                  $<strong>13</strong>.25
                </p>
                <p className="option">or 3*$4.42</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img src="Images/un 8.png" alt="A man in T-shirt" />
              <div className="caption content">
                <p>Polo T-shirt</p>
                <hr />
                <p>
                  $<strong>10</strong>.90
                </p>
                <p className="option">or 9*$1.21</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img src="Images/Untitled-1.png" alt="A man in T-shirt" />
              <div className="caption content">
                <p>Light brown T-shirt</p>
                <hr />
                <p>
                  $<strong>10</strong>.90
                </p>
                <p className="option">or 9*$1.21</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img src="Images/Untitled-12.png" alt="A man in T-shirt" />
              <div className="caption content">
                <p>Deep ash T-shirt</p>
                <hr />
                <p>
                  $<strong>14</strong>.90
                </p>
                <p className="option">or 7*$2.13</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10 main">
          <div className="col-md-3 ">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img
                src="Images/Untitled-14.png"
                alt="A man in T-shirt"
                className="imagesHeight"
              />
              <div className="caption content">
                <p>Blue-black T-shirt</p>
                <hr />
                <p>
                  $<strong>14</strong>.90
                </p>
                <p className="option">or 7*$2.13</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail card">
              <img src="Images/Untitled-15.png" alt="A man in T-shirt" />
              <div className="caption content">
                <p>Seablue and white T-shirt</p>
                <hr />
                <p>
                  $<strong>25</strong>.90
                </p>
                <p className="option">or 12*$2.16</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail card">
              <img src="Images/Untitled-2.png" alt="A man in T-shirt" />
              <div className="caption content">
                <p>Ash T-shirt</p>
                <hr />
                <p>
                  $<strong>10</strong>.90
                </p>
                <p className="option">or 9*$1.21</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img src="Images/Untitled-3.png" alt="A man in T-shirt" />
              <div className="caption content">
                <p>multi-colored T-shirt</p>
                <hr />
                <p>
                  $<strong>49</strong>.90
                </p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10 main">
          <div className="col-md-3 ">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img
                src="Images/Untitled-5.png"
                alt="A man in T-shirt"
                className="imageHeights"
              />
              <div className="caption content">
                <p>A white T-shirt</p>
                <hr />
                <p>
                  $<strong>22</strong>.50
                </p>
                <p className="option">or 4*$5.631</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail card">
              <img
                src="Images/Untitled-7.png"
                alt="A man in T-shirt"
                className="imageHeights"
              />
              <div className="caption content">
                <p>Ash T-shirt</p>
                <hr />
                <p>
                  $<strong>18</strong>.70
                </p>
                <p className="option">or 4*$4.67</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img src="Images/Untitled-9.png" alt="A man in T-shirt" />
              <div className="caption content">
                <p>Black T-shirt</p>
                <hr />
                <p>
                  $<strong>134</strong>.90
                </p>
                <p className="option">or 5*$26.98</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p className="free">Free shipping</p>
            <div className="thumbnail card">
              <img src="Images/Untitled-1.png" alt="A man in T-shirt" />
              <div className="caption content">
                <p>Brown T-shirt</p>
                <hr />
                <p>
                  $<strong>49</strong>.00
                </p>
                <p className="option">or 9*$5.44</p>
                <p>
                  <a href="#1" className="btn btn-primary button" role="button">
                    Add to cart
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
