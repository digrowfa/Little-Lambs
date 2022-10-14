import kids from '../../img/about/kids.webp'

const MyChild = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="myChildBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="myChildContent">
                                    <h4>Will my child be prepared for big/formal school?</h4>
                                    <p>At LLN, we provide the best quality curriculum with multiple innovative programs<br /> specially designed to develop your child’s potential. The curriculum involves the <br />following subjects:</p>
                                </div>
                                <div className="myChildSubject">
                                    <ul>
                                        <li>ENGLISH</li>
                                        <li>METHAMETICS</li>
                                        <li>SCIENCE</li>
                                        <li>SOCIAL STUDIES</li>
                                        <li>INFORMATION TECHNOLOGY</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="myChlidContent">
                                    <p>Along with these core subjects, we focus on developing the child emotionally as well as socially in order for the child to be able to play with children of the same age group, develop confidence, overcome separation anxiety, follow classroom routines and  most importantly, be toilet trained. Other prime areas of focus include the physical development of the child and communication/language. We train the child to listen carefully to others, understand what is said and speak with the help of activities that will give an opportunity to interact and play. As mentioned, the curriculum includes the subjects Social Studies and Information Technology; this learnt skillset will not only keep the child ahead in today’s digital world but also guide the child to portray the act of an active/good citizen as this is part of the ‘LLN UNIQUE LEARNING PROGRAM’.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='kidsBox'>
                                    <img src={kids} alt="kids" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="myChlidContent">
                                    <h2>Is attending a nursery<br />
                                        essential?</h2>
                                    <p>Along with these core subjects, we focus on developing the child emotionally as well as socially in order for the child to be able to play with children of the same age group, develop confidence, overcome separation anxiety, follow classroom routines and  most importantly, be toilet trained. Other prime areas of focus include the physical development of the child and communication/language. We train the child to listen carefully to others, understand what is said and speak with the help of activities that will give an opportunity to interact and play. As mentioned, the curriculum includes the subjects Social Studies and Information Technology; this learnt skillset will not only keep the child ahead in today’s digital world but also guide the child to portray the act of an active/good citizen as this is part of the ‘Little Lambs Nursery UNIQUE LEARNING PROGRAM’.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyChild