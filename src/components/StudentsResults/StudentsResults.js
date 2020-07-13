import React, { Component } from 'react';
import { } from "react-icons/fa";
import { Form, Button, Table } from 'react-bootstrap';
import { FaGraduationCap } from "react-icons/fa";
import html2pdf from 'html2pdf.js';
import img from '../../res/img/gradImg.png';

import Moment from 'react-moment';

import './StudentsResults.scss';


class StudentsResults extends Component {

  constructor() {
    super();

    this.state = {
      marks: [
        { Id: 1, CA: '10', Exams: '10', courseCode: 'CEF 438', CourseTitle: 'Database', finalMark: '10', grade: '10' },
        { Id: 2, CA: '10', Exams: '10', courseCode: 'CEF 442', CourseTitle: 'Inernet programming', finalMark: '10', grade: '10' },
        { Id: 3, CA: '10', Exams: '10', courseCode: 'CEF 421', CourseTitle: 'Human comouter interface', finalMark: '10', grade: '10' },
        { Id: 4, CA: '10', Exams: '10', courseCode: 'CEF 460', CourseTitle: 'Image processing', finalMark: '10', grade: '10' },
        { Id: 5, CA: '10', Exams: '10', courseCode: 'CEF 460', CourseTitle: 'Image processing', finalMark: '10', grade: '10' },
        { Id: 6, CA: '10', Exams: '10', courseCode: 'CEF 460', CourseTitle: 'Image processing', finalMark: '10', grade: '10' },
      ],
      loading: 'false',
    }
  }

  renderTable() {
    const { results } = this.props;
    let id = 0;

    return results.map((result, rowIndex) => {
      id++;
      return (
        <tr key={rowIndex} style={{ color: '#00000090' }}>
          <td>{id}</td>
          <td>{result.code}</td>
          <td>{result.ca_mark}</td>
          <td>{result.exam_mark}</td>
          <td>{result.grade}</td>
        </tr>
      )
    })
  }


  printDocument() {
    var element = document.getElementById('divToPrint');
    var opt = {
      filename: 'Results.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2, scrollY: 0, scrollX: 0,
      },
      jsPDF: { unit: 'cm', format: 'a4', orientation: 'p', }
    };

    html2pdf().from(element).set(opt).save();

  }

  render() {
    const { semester } = this.props;

    return (
      <div >

        <div className='StudentsResults' id="divToPrint">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              border: 'solid',
              borderTopWidth: '1px',
              borderBottomWidth: '1px',
              borderLeftWidth: '0px',
              borderRightWidth: '0px',
              borderColor: '#cccccc',
              padding: '1rem 1rem',
              marginBottom: '2rem'
            }}
          >
            <div style={{ flex: 2, justifyContent: 'flex-start', }}>
              <p style={{ margin: '0' }}>Name: student Name</p>
              <p style={{ margin: '0' }}>Matricule: Matricule</p>
              <p style={{ margin: '0' }}>Major: Major</p>

            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <div className='logo'>
                SchoolMan
          </div>
            </div>
            <div style={{ flex: 2, justifyContent: 'flex-end', textAlign: 'right', margin: '0', }}>
              <p style={{ margin: '0' }}>Department: computer Department</p>
              <p style={{ margin: '0' }}>semester: {semester}</p>
              <p style={{ margin: '0' }}>year: 2019/2020</p>
              <p style={{ margin: '0' }}>date: 
                <Moment format="YYYY/MM/DD" />
              </p>
            </div>
          </div>
          <div>
            <Table striped responsive>
              <thead style={{ backgroundColor: '#cccccc', color: 'white' }}>
                <tr>
                  <th>S/n</th>
                  <th>Course code</th>
                  <th>CA/30</th>
                  <th>Exams/70</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody style={{ border: 'solid', borderBottomWidth: '1px', borderTopWidth: '0px', borderLeftWidth: '0px', borderRightWidth: '0px', borderColor: '#cccccc', }}>
                {this.renderTable()}
              </tbody>
            </Table>
          </div>
        </div>

        <div style={{ padding: '2rem 2rem', margin: '0rem 0.5rem' }}>
          <Button onClick={() => this.printDocument()} variant="primary" type="button">
            Download results
            </Button>
        </div>


      </div>
    )
  }
}

export default StudentsResults;