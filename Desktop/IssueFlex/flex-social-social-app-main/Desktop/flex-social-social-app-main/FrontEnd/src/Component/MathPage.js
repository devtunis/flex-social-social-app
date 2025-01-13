import React from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './MathPage.css'; // Import CSS file

const MathPage = () => {
  return (
    <div className="math-doc-container">
      <h1 className="math-title">LaTeX Math Expressions Guide</h1>
      
      <section className="math-section">
        <h2>1. Basic Mathematical Expressions</h2>
        <div className="math-example">
          <h3>1.1 Fractions</h3>
          <p>To create a fraction, use the command:</p>
          <BlockMath math={"\\frac{numerator}{denominator}"} />
          <p>Example: <BlockMath math={"\\frac{1}{2}"} /></p>
        </div>

        <div className="math-example">
          <h3>1.2 Exponents</h3>
          <p>To create exponents, use the caret symbol `^`:</p>
          <BlockMath math={"x^n"} />
          <p>Example: <BlockMath math={"x^2"} /></p>
        </div>

        <div className="math-example">
          <h3>1.3 Square Root</h3>
          <p>To create a square root, use the command:</p>
          <BlockMath math={"\\sqrt{expression}"} />
          <p>Example: <BlockMath math={"\\sqrt{4}"} /></p>
        </div>
      </section>

      <section className="math-section">
        <h2>2. Summations and Products</h2>
        <div className="math-example">
          <h3>2.1 Summation</h3>
          <p>To create summations, use:</p>
          <BlockMath math={"\\sum_{n=1}^{\\infty} a_n"} />
        </div>
        <div className="math-example">
          <h3>2.2 Products</h3>
          <p>To represent a product, use:</p>
          <BlockMath math={"\\prod_{n=1}^{k} n"} />
        </div>
      </section>

      <section className="math-section">
        <h2>3. Integrals</h2>
        <div className="math-example">
          <h3>3.1 Basic Integral</h3>
          <p>To create an integral:</p>
          <BlockMath math={"\\int_{a}^{b} f(x) \\, dx"} />
        </div>
        <div className="math-example">
          <h3>3.2 Double Integral</h3>
          <p>To create a double integral:</p>
          <BlockMath math={"\\int \\int f(x,y) \\, dx \\, dy"} />
        </div>
      </section>
    </div>
  );
};

export default MathPage;
