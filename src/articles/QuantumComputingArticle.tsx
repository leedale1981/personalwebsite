import * as React from 'react';
import QuantumImage from "../images/quantum.png";
import { Paper, Typography, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';
// @ts-ignore
import MathJax from 'react-mathjax2';

const QuantumComputingArticle: React.FC = () => {
    return (
        <div>
            <Link to={"/articles"}><Typography variant='h6' className='Courier-Typography'>{`<- Back to articles`}</Typography></Link>
            <Paper className="Article">
                <img src={QuantumImage} />
                <Typography variant="h4" style={{marginBottom: 20}}>Quantum Computing: What is the Schrodinger Equation anyway?</Typography>
                <div className="Article-Tags">
                    <Chip label="algorithms" /><Chip label="physics" /><Chip label="computer science" /><Chip label="quantum computing" />
                </div>
                <Typography variant="caption" className="Article-Date">3rd May 2020</Typography>
                <Typography variant="body1">
                In this article I want to give an very brief introduction to the Schrodinger Equation and how we can use quantum mechanics in computing to achieve things classical computation methods cannot.
                </Typography>
                <Typography variant="body1">Hopefully, this article will go some way in simplifying what all this “Quantum Computing” malarkey is.</Typography>
                <Typography variant="body1">I am going to assume mathematical knowledge in this article, and I am only going to cover each concept briefly. Quantum mechanics and quantum computing are extremely wide and deep areas of study; this article will only cover the hight level topics that will hopefully give you some ideas that you can go away and dive into to get a better understanding.</Typography>
                <Typography variant="body1">So, with all that said, lets jump right in. </Typography>
                <Typography variant="h6">What is the Schrodinger Equation?</Typography>
                <Typography variant="body1">Simply put the Schrodinger equation is a mathematical equation that allows us to predict the probability of obtaining a value from a quantum mechanical system, if we took a measurement of that quantum mechanical system.</Typography>
                <Typography variant="body1">The Schrodinger equation is a partial differential equation and looks like this:</Typography>
                <Typography variant="body1">
                    <MathJax.Context input='ascii' className="Math">
                        <div>
                            <MathJax.Node>{'iℏ ∂/∂t ψ(x,t)= -ℏ^2/2m  ∂^2/(∂x^2 ) ψ(x,t)+V(x)ψ(x,t)'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                </Typography>
                <Typography variant="body1">
                The reason it’s a partial different equation is that we have differentials that depend on two variables, namely position x and time t. 
                </Typography>
                <Typography variant="body1">The Schrodinger equation can be used to predict what will happen at time t of any wave function we plug into it. The particular example above has the wave function ψ(x,t) and as this wave function only accepts the values x and t then we say that this is one dimensional as we only have one spatial variable x.</Typography>
                <Typography variant="body1">The wave function in quantum mechanics is a function that describes the system of interest and it contains everything there is to know about the system. We plug our wave function into the Schrodinger equation and the solutions tell us the probability of getting a value (Eigen value) of a particular observable.</Typography>
                <Typography variant="h6">Operators</Typography>
                <Typography variant="body1">An observable in quantum mechanics is something that we can measure. For example, we can measure the energy values an electron can possess when bound to an atom. In this example the observable is the energy value. To get the energy values we need to operate on our wavefunction by using an operator. Each observable is associated with an operator and the energy operator is called the Hamiltonian operator and is denoted by </Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                        <div>
                            <MathJax.Node>{'\hat{H}'}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                </Typography>
                <Typography variant="body1">The total energy of a system is the sum of it’s kinetic and potential energy. We can see in the Schrodinger equation above that we have the term </Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'V(x)'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">This is the potential energy.</Typography>
                <Typography variant="body1">In classical mechanics we can write the kinetic energy as</Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'(p_x^2)/2m'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">where</Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'p_x'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">is the momentum along in the x direction and m is the mass of the particle.</Typography>
                <Typography variant="body1">So, the total energy of a system can be written as </Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'(p_x^2)/2m+V(x)'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">This is the Hamiltonian function </Typography>
                <Typography variant="body1">We cannot use this form of energy equation in quantum mechanics however we need to use a quantum mechanical operator instead.</Typography>
                <Typography variant="body1">The quantum mechanical operator for momentum is </Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'\hatp_x=-iℏ ∂/∂x'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">So our quantum mechanical operator for kinetic energy becomes</Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'(\hatp _x^2)/2m=-ℏ^2/2m  ∂^2/(∂x^2 )'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">As you can see in our Schrodinger equation above we have the term </Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'-ℏ^2/2m  ∂^2/(∂x^2 )'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">and this represents the kinetic energy term for our system.</Typography>
                <Typography variant="body1">We can now form the quantum mechanical Hamiltonian operator which is </Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'\hatH=-ℏ^2/2m  ∂^2/(∂x^2 )+V(x)'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">This represents the energy observable which we can apply to our wave function to get values for the energy of our system.</Typography>
                <Typography variant="body1">So, we can now rewrite the Schrodinger equation with the Hamiltonian representing the energy part:</Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'iℏ ∂/∂t ψ(x,t)= \hatHψ(x,t)  '}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="h6">Stationary states</Typography>
                <Typography variant="body1">The problem with the above equation is that it is a partial differential equation, and these are more difficult to solve. It turns out we can obtain a form of Schrodinger’s equation that is independent of time by using a method called separation of variables.</Typography>
                <Typography variant="body1">We can represent our wave function ψ(x,t) as the product of two functions like so</Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'ψ(x,t)=ψ(x)T(t)'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">It turns out by separating the wave function like this we can obtain a time independent form of Schrodinger’s equation:</Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'-ℏ^2/2m  d^2/(dx^2 ) ψ(x)+V(x)ψ(x)=Eψ(x)'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">The solutions to this time independent Schrodinger Equation are called stationary states and when subject to boundary conditions give us the energy levels of a system.</Typography>
                <Typography variant="body1">It is important to note that the wave function is probabilistic in nature which in simple terms gives us the probability of finding the observable in a state when we measure it.  The time dependent Schrodinger equation itself gives us a way of predicting forward in time how the wave function will evolve. Once a measurement is taken of a particular observable however the wave function collapses to ONE particular state.</Typography>
                <Typography variant="body1">What we mean by collapsing to a particular state is that a wave function can be made up of combination of states called a linear combination of states. </Typography>
                <Typography variant="h6">Dirac notation</Typography>
                <Typography variant="body1">Dirac notation is a more concise way of representing wave function states in quantum mechanics.</Typography>
                <Typography variant="body1">We say that a wave function can be a linear combination of other wave functions and this is represented in Dirac notation as</Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'|ψ⟩=∑_1^n c_i|ψ_i⟩'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">Here c_i is a complex constant. As we can see a wave function can be just a sum of other wave functions. </Typography>
                <Typography variant="body1">Another way to represent states using Dirac notation is by using column vectors. </Typography>
                <Typography variant="body1">For instance, a state can be represented by the following notation:</Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'|ψ⟩=[1@0]'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="h6">How can we use this Schrodinger Equation for computation?</Typography>
                <Typography variant="body1">So first let’s see how classical computers work and then lets see how using quantum mechanics can improve on it.</Typography>
                <Typography variant="body1">All computers obey the basic model of a Turing machine. A Turing machine is an abstract model of computation invented by Alan Turing in 1936. You can look up the details of how a Turing machine works but the general notion is that the machine works on a finite set of states and obeys rules for how to compute things. </Typography>
                <Typography variant="body1">Modern computers today implement this computation model by using transistors and logic gates. Transistors are essentially tiny little switches that represent either on or off states. </Typography>
                <Typography variant="body1">Computation in classical computers happens by representing states in these transistors so there is ultimately a limit of how many states a computer can represent, and the Turing machine can only operate on each state one at a time.</Typography>
                <Typography variant="body1">So, for instance we can represent two possible binary states for a classical computer like so:</Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'|0⟩=[1@0]'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'|1⟩=[0@1]'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">That’s two possible states and a classical computer can only operate on these states to do computation one at a time.</Typography>
                <Typography variant="body1">Let’s contrast that with a quantum computer. Remember we said that a quantum state is a linear combination of other states?</Typography>
                <Typography variant="body1">So, in a quantum computer we can represent ALL possible states in a single state like so</Typography>
                <Typography variant="body1">
                <MathJax.Context input='ascii' className="Math">
                    <div>
                        <MathJax.Node>{'|ψ⟩=[1@0]+[0@1]+⋯'}</MathJax.Node>
                    </div>
                </MathJax.Context>
                </Typography>
                <Typography variant="body1">This state could represent all the possible states that a computer needs to compute on. We can now use the Schrodinger equation to collapse the state onto the most probable state from its linear combination. The state we get as a result will be the answer to our computation.</Typography>
                <Typography variant="body1">So, you can see that instead of a Turing machine iterating through each binary state one by one, the quantum computer can represent all state and perform the computing in just one step.</Typography>
                <Typography variant="h6">Other uses for quantum computers</Typography>
                <Typography variant="body1">Computation is just one aspect of quantum computing. We can also use other properties that emerge from quantum mechanics like entanglement. Entanglement is used in Quantum Key Distribution algorithms which use entanglement to detect whether a cryptographic key has been tampered with by an unintended recipient.</Typography>
                <Typography variant="body1">The subject of Quantum Key Distribution however can wait for another day.</Typography>
            </Paper>
        </div>
    );
}

export default QuantumComputingArticle;