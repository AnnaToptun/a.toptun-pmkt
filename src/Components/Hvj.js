import { Collapse } from 'bootstrap'
import React, { Component } from 'react'
import { Card, CardDeck, Col, Container, Table } from 'react-bootstrap'
import hvj from '../photo/hvj.jpg'

export default class Hvj extends Component {
    render() {
        return ( 
            <Container >
                <h1  className="h1 ">Гальченко Володимир Якович</h1>
                <hr />
                <div className="about-teach">
                    <Col sm={7}>
                        
                        <p className="p"><b>Гальченко Володимир Якович</b>  - професор кафедри приладобудування, 
                        мехатроніки та комп’ютеризованих технологій Черкаського  державного технологічного університету, 
                        професор, доктор технічних наук.</p>
                        <h3 className="text-center"><b>Біографія</b> </h3><hr />
                        
                        
                        <p className="p">У 1982 році з відзнакою закінчив електромашинобудівний факультет 
                        Ворошиловградського машинобудівного інституту за спеціальністю «Електричні машини» 
                        та отримав фах – інженер-електромеханік (диплом з відзнакою ЖВ-І №-113786).</p>

                        <p className="p">Кандидат технічних наук з 1991 року. Дисертацію захистив 21 грудня 1990 року у спеціалізованій
                         Вченій Раді Московського енергетичного інституту за спеціальністю 05.09.05 – теоретична електротехніка. 
                         Тема дисертації: ”Синтез магнітних систем давачів лінійних переміщень” (диплом КД № 034810 від 17.04.1991 року).
                         Вчене звання “Доцент кафедри технічної кібернетики” присвоєно 29 березня 1996 року (атестат доцента ДЦ АР №003411). 
                         Доктор технічних наук з 1999 року. Дисертацію захистив 15 квітня 1999 року у спеціалізованій Вченій Раді 
                         Харківського державного політехнічного університету за спеціальністю 05.11.13 – методи і прилади контролю 
                         та визначення складу речовин. Тема дисертації: “Методи оптимізації параметрів та режимів роботи вихрострумових 
                         перетворювачів дефектоскопів” (диплом ДД № 000798 від 13.10.1999 року). Вчене звання “Професор кафедри медичної 
                         кібернетики, біофізики та медичної апаратури” присвоєно 20 червня 2002 року.</p>
                        <p className="p">У ЧДТУ почав працювати з 1 вересня 2014 року професором кафедри приладобудування, 
                        мехатроніки та комп’ютеризованих технологій.</p>
                        <p className="p">Викладає дисциплини: </p>
                        <ul>
                            <li >«Математичні методи оптимізації та моделювання систем і процесів »,</li>
                            <li >«Теорія автоматичного керування»,</li>
                            <li >«Оптимізація прийняття рішень у техніці»,</li>
                            <li >«Фізичні процеси у приладах та системах »,</li>
                            <li >«Теорія розпізнавання» </li>
                        </ul>
                        
                      

                        <h3 className="text-center"><b> Наукова діяльність</b></h3><hr />
                    
                        <p className="p"></p>
                        <p className="p">Інтереси: розрахунок та синтез електромагнітних полів заданої конфігурації; 
                        неруйнівний контроль; застосування штучного інтелекту; обробка сигналів та зображень.</p>  
                        <p className="p">Професор Гальченко В.Я. є науковим керівником чотирьох захищених аспірантів </p>  
                        <ul>
                            <li >Павлов О.К. “Інтегральний метод параметричного синтезу соліноїдальних джерел магнітних полів”
                            спеціальність 05.09.05 – теоретична електротехніка (Київ, Інститут проблем моделювання в енергетиці ім. Г.Є 
                            Пухова НАН України, 2005),</li>
                            <li >Воробйов М.О. “Еволюційний синтез структур 
                            соленоїдних систем із заданим розподілом магнітного поля”, спеціальність 05.09.05 – теоретична 
                            електротехніка (Київ, Інститут проблем моделювання в енергетиці ім. Г.Є Пухова НАН України, 2005)</li>
                            <li > Остапущенко Д.Л. “Оптимізація операції намагнічування в магнітній дефектоскопії виробів складної форми”, 
                            спеціальність 05.11.13 – прилади і методи контролю та визначення складу речовин (Харків, Національний 
                            технічний університет “Харківський Політехнічний Інститут”, 2010);</li>
                            <li >Якимов О.М. ”Математичне моделювання та оптимальний синтез аксіально-симетричних джерел магнітного поля 
                            з феромагнітними елементами”, спеціальність 01.05.02 – математичне моделювання та обчислювальні методи
                            (Вінниця, Вінницький національний технічний університет, 2013) та одного здобувача освітньо-наукового рівня 
                            “доктор філософії” (Сторчак А.В.) зі спеціальності 152 – метрологія та інформаційно-вимірювальна техніка.,</li>
                            
                        </ul><hr />  
                    </Col>
                    <Col sm={5}>
                        
                        <CardDeck border="dark" className='m-3'>
                            <Card className="card">
                                <img
                                    
                                    src={hvj}
                                />
                                <Card.Body>
                                    <Card.Title  className="table-title"> <span ><b> ГАЛЬЧЕНКО <br /> Володимир Якович </b></span> </Card.Title> <hr />
                                    <Table >
                                        
                                        <tr >
                                            <td className="table-col-1" > Місце роботи </td> 
                                            <td  className="table-col-2"> Черкаський державний технологічний університет </td>

                                        </tr>
                                        <tr>
                                            <td className="table-col-1 " > Освіта </td> 
                                            <td className="table-col-2" > 
                                                <ul>
                                                    <li>Ворошиловградський машинобудівний інститут</li>
                                                </ul>
                                                
                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="table-col-1 " > Науковий ступінь</td> 
                                            <td className="table-col-2 "> доктор технічних наук </td>

                                        </tr>
                                        <tr>
                                            <td className="table-col-1 " > Наукове звання</td> 
                                            <td className="table-col-2 "> Професор </td>

                                        </tr>
                                    </Table>
                                    
                                    
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        
                    </Col>
                    
                       
                </div>
            </Container>
        )
    }
}