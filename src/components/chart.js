import React from 'react';
import '../components/App.css';
import '../components/sb-admin-2.min.css';
import {Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + "").replace(",", "").replace(" ", "");
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}

function Chart() {
  return (
<section>

<span id="page-top">

{/* <!-- Page Wrapper --> */}
  <div id="wrapper">
   {/* <!-- Sidebar --> */}
   <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a class="sidebar-brand d-flex align-items-center justify-content-center">
    <div class="sidebar-brand-icon rotate-n-15">
        
        <i class="fas fa-laugh-wink"></i>
    </div>
    <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>

{/* <!-- Divider --> */}
<hr class="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li class="nav-item">
    <a class="nav-link" >
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span> Dashboard</span>
    </a>
</li>

{/* <!-- Divider --> */}
<hr class="sidebar-divider"/>

{/* <!-- Heading --> */}
<div class="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-cog"></i>
        <span> Components</span>
    </a>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            {/* <div class="collapse-item">Buttons</div> */}
                     <Link class="collapse-item" to="/button" >Buttons</Link>
                     <Link class="collapse-item" to="/card" >Cards</Link> 
        </div>
    </div>
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fas fa-fw fa-wrench"></i>
        <span> Utilities</span>
    </a>
    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <Link class="collapse-item" to="/color" >Colors</Link>
            <Link class="collapse-item" to="/border" >Borders</Link>
            <Link class="collapse-item" to="/animation" >Animations</Link>
            <Link class="collapse-item" to="/other" >Other</Link>
                         </div>
    </div>
</li>

{/* <!-- Divider --> */}
<hr class="sidebar-divider"/>

{/* <!-- Heading --> */}
<div class="sidebar-heading">
    Addons
</div>

  {/* <!-- Nav Item - Pages Collapse Menu --> */}
  <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true"
                aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span> Pages</span>
            </a>
           
            <div id="collapsePages" class="collapse" aria-labelledby="headingPages"
                data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Login Screens:</h6>
                    <Link class="collapse-item" to="/login" >Login</Link>
                    <Link class="collapse-item" to="/register" >Register</Link>
                    <Link class="collapse-item" to="/password" >Forgot Password</Link>
                    <div class="collapse-divider"></div>
                    <h6 class="collapse-header">Other Pages:</h6>
                    <Link class="collapse-item" to="/404" >404 Page</Link>
                    <Link class="collapse-item" to="/blank" >Blank Page</Link>
                    
                </div>
            </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li class="nav-item">
            <Link class="nav-link" to="/chart" >
                <i class="fas fa-fw fa-chart-area"></i>
              Charts</Link> 
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li class="nav-item">
            <Link class="nav-link" to="/table" >
                <i class="fas fa-fw fa-table"></i>
                 Tables</Link>
        </li>
{/* <!-- Divider --> */}
<hr class="sidebar-divider d-none d-md-block"/>

{/* <!-- Sidebar Toggler (Sidebar) --> */}
<div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div>

{/* <!-- Sidebar Message --> */}
    <div class="sidebar-card d-none d-lg-flex">
        <img class="sidebar-card-illustration mb-2" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg" alt="..."/>
        <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
        <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
    </div>


</ul>
        {/* <!-- End of Sidebar --> */}
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            {/* <!-- Topbar --> */}
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>

                {/* <!-- Topbar Search --> */}
                <form
                    class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div class="input-group">
                        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button">
                                <i class="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>

                {/* <!-- Topbar Navbar --> */}
                <ul class="navbar-nav ml-auto">

                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li class="nav-item dropdown no-arrow d-sm-none">
                        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-search fa-fw"></i>
                        </a>
                        {/* <!-- Dropdown - Messages --> */}
                        <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form class="form-inline mr-auto w-100 navbar-search">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2"/>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button">
                                            <i class="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    {/* <!-- Nav Item - Alerts --> */}
                    <li class="nav-item dropdown no-arrow mx-1">
                        <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-bell fa-fw"></i>
                            {/* <!-- Counter - Alerts --> */}
                            <span class="badge badge-danger badge-counter">3+</span>
                        </a>
                        {/* <!-- Dropdown - Alerts --> */}
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="alertsDropdown">
                            <h6 class="dropdown-header">
                                Alerts Center
                            </h6>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-primary">
                                        <i class="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 12, 2019</div>
                                    <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-success">
                                        <i class="fas fa-donate text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-warning">
                                        <i class="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                            </a>
                            <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                    </li>

                    {/* <!-- Nav Item - Messages --> */}
                    <li class="nav-item dropdown no-arrow mx-1">
                        <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-envelope fa-fw"></i>
                            {/* <!-- Counter - Messages --> */}
                            <span class="badge badge-danger badge-counter">7</span>
                        </a>
                        {/* <!-- Dropdown - Messages --> */}
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="messagesDropdown">
                            <h6 class="dropdown-header">
                                Message Center
                            </h6>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_1.svg"
                                        alt="..."/>
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div class="font-weight-bold">
                                    <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                        problem I've been having.</div>
                                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_2.svg"
                                        alt="..."/>
                                    <div class="status-indicator"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">I have the photos that you ordered last month, how
                                        would you like them sent to you?</div>
                                    <div class="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_3.svg"
                                        alt="..."/>
                                    <div class="status-indicator bg-warning"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">Last month's report looks great, I am very happy with
                                        the progress so far, keep up the good work!</div>
                                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                        alt="..."/>
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                        told me that people say this to all dogs, even if they aren't good...</div>
                                    <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                </div>
                            </a>
                            <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                        </div>
                    </li>

                    <div class="topbar-divider d-none d-sm-block"></div>

                    {/* <!-- Nav Item - User Information --> */}
                    <li class="nav-item dropdown no-arrow">
                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                            <img class="img-profile rounded-circle"
                                src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"/>
                        </a>
                        {/* <!-- Dropdown - User Information --> */}
                        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Activity Log
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </a>
                        </div>
                    </li>

                </ul>

            </nav>
            {/* <!-- Begin Page Content --> */}
                <div class="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <h1 class="h3 mb-2 text-gray-800">Charts</h1>
                    <p class="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
                        The charts below have been customized - for further customization options, please visit the <a
                            target="_blank" href="https://www.chartjs.org/docs/latest/">official Chart.js
                            documentation</a>.</p>

                    {/* <!-- Content Row --> */}
                    <div class="row">

                        <div class="col-xl-8 col-lg-7">

                            {/* <!-- Area Chart --> */}
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
                                </div>
                                <div class="card-body">
                                    <div class="chart-area">
                                    <Line
                        data={{
                          labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                          ],
                          datasets: [
                            {
                              label: "Earnings",
                              lineTension: 0.3,
                              backgroundColor: "rgba(78, 115, 223, 0.05)",
                              borderColor: "rgba(78, 115, 223, 1)",
                              pointRadius: 3,
                              pointBackgroundColor: "rgba(78, 115, 223, 1)",
                              pointBorderColor: "rgba(78, 115, 223, 1)",
                              pointHoverRadius: 3,
                              pointHoverBackgroundColor:
                                "rgba(78, 115, 223, 1)",
                              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                              pointHitRadius: 10,
                              pointBorderWidth: 2,
                              data: [
                                0, 10000, 5000, 15000, 10000, 20000, 15000,
                                25000, 20000, 30000, 25000, 40000,
                              ],
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          layout: {
                            padding: {
                              left: 10,
                              right: 25,
                              top: 25,
                              bottom: 0,
                            },
                          },
                          scales: {
                            xAxes: [
                              {
                                time: {
                                  unit: "date",
                                },
                                gridLines: {
                                  display: false,
                                  drawBorder: false,
                                },
                                ticks: {
                                  maxTicksLimit: 7,
                                },
                              },
                            ],
                            yAxes: [
                              {
                                ticks: {
                                  maxTicksLimit: 5,
                                  padding: 10,
                                  // Include a dollar sign in the ticks
                                  callback: function (value, index, values) {
                                    return "$" + number_format(value);
                                  },
                                },
                                gridLines: {
                                  color: "rgb(234, 236, 244)",
                                  zeroLineColor: "rgb(234, 236, 244)",
                                  drawBorder: false,
                                  borderDash: [2],
                                  zeroLineBorderDash: [2],
                                },
                              },
                            ],
                          },
                          legend: {
                            display: false,
                          },
                          tooltips: {
                            backgroundColor: "rgb(255,255,255)",
                            bodyFontColor: "#858796",
                            titleMarginBottom: 10,
                            titleFontColor: "#6e707e",
                            titleFontSize: 14,
                            borderColor: "#dddfeb",
                            borderWidth: 1,
                            xPadding: 15,
                            yPadding: 15,
                            displayColors: false,
                            intersect: false,
                            mode: "index",
                            caretPadding: 10,
                            callbacks: {
                              label: function (tooltipItem, chart) {
                                var datasetLabel =
                                  chart.datasets[tooltipItem.datasetIndex]
                                    .label || "";
                                return (
                                  datasetLabel +
                                  ": $" +
                                  number_format(tooltipItem.yLabel)
                                );
                              },
                            },
                          },
                        }}
                      />
                                    </div>
                                    <hr/>
                                    Styling for the area chart can be found in the
                                    <code>/js/demo/chart-area-demo.js</code> file.
                                </div>
                            </div>

                            {/* <!-- Bar Chart --> */}
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>
                                </div>
                                <div class="card-body">
                                    <div class="chart-bar">
                                    <Bar
                        data={{
                          labels: [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                          ],
                          datasets: [
                            {
                              label: "Revenue",
                              backgroundColor: "#4e73df",
                              hoverBackgroundColor: "#2e59d9",
                              borderColor: "#4e73df",
                              data: [4215, 5312, 6251, 7841, 9821, 14984],
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          layout: {
                            padding: {
                              left: 10,
                              right: 25,
                              top: 25,
                              bottom: 0,
                            },
                          },
                          scales: {
                            xAxes: [
                              {
                                time: {
                                  unit: "month",
                                },
                                gridLines: {
                                  display: false,
                                  drawBorder: false,
                                },
                                ticks: {
                                  maxTicksLimit: 6,
                                },
                                maxBarThickness: 25,
                              },
                            ],
                            yAxes: [
                              {
                                ticks: {
                                  min: 0,
                                  max: 15000,
                                  maxTicksLimit: 5,
                                  padding: 10,
                                  // Include a dollar sign in the ticks
                                  callback: function (value, index, values) {
                                    return "$" + number_format(value);
                                  },
                                },
                                gridLines: {
                                  color: "rgb(234, 236, 244)",
                                  zeroLineColor: "rgb(234, 236, 244)",
                                  drawBorder: false,
                                  borderDash: [2],
                                  zeroLineBorderDash: [2],
                                },
                              },
                            ],
                          },
                          legend: {
                            display: false,
                          },
                          tooltips: {
                            titleMarginBottom: 10,
                            titleFontColor: "#6e707e",
                            titleFontSize: 14,
                            backgroundColor: "rgb(255,255,255)",
                            bodyFontColor: "#858796",
                            borderColor: "#dddfeb",
                            borderWidth: 1,
                            xPadding: 15,
                            yPadding: 15,
                            displayColors: false,
                            caretPadding: 10,
                            callbacks: {
                              label: function (tooltipItem, chart) {
                                var datasetLabel =
                                  chart.datasets[tooltipItem.datasetIndex]
                                    .label || "";
                                return (
                                  datasetLabel +
                                  ": $" +
                                  number_format(tooltipItem.yLabel)
                                );
                              },
                            },
                          },
                        }}
                      />
                                    </div>
                                    <hr/>
                                    Styling for the bar chart can be found in the
                                    <code>/js/demo/chart-bar-demo.js</code> file.
                                </div>
                            </div>

                        </div>

                        {/* <!-- Donut Chart --> */}
                        <div class="col-xl-4 col-lg-5">
                            <div class="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Donut Chart</h6>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div class="card-body">
                                    <div class="chart-pie pt-4">
                                    <Doughnut
                        data={{
                          labels: ["Direct", "Referral", "Social"],
                          datasets: [
                            {
                              data: [55, 30, 15],
                              backgroundColor: [
                                "#4e73df",
                                "#1cc88a",
                                "#36b9cc",
                              ],
                              hoverBackgroundColor: [
                                "#2e59d9",
                                "#17a673",
                                "#2c9faf",
                              ],
                              hoverBorderColor: "rgba(234, 236, 244, 1)",
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          tooltips: {
                            backgroundColor: "rgb(255,255,255)",
                            bodyFontColor: "#858796",
                            borderColor: "#dddfeb",
                            borderWidth: 1,
                            xPadding: 15,
                            yPadding: 15,
                            displayColors: false,
                            caretPadding: 10,
                          },
                          legend: {
                            display: false,
                          },
                          cutoutPercentage: 80,
                        }}
                      />
                                    </div>
                                    <hr/>
                                    Styling for the donut chart can be found in the
                                    <code>/js/demo/chart-pie-demo.js</code> file.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- /.container-fluid --> */}

            </div>
/           {/* <!-- Footer --> */}
           <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2021</span>
                    </div>
                </div>
            </footer>
            {/* <!-- End of Footer --> */}
  </div>
  </div>

   
    {/* <!-- End of Page Wrapper --> */}

    {/* <!-- Scroll to Top Button--> */}
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    {/* <!-- Logout Modal--> */}
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
    </span>
    {/* <!-- Bootstrap core JavaScript--> */}
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    {/* <!-- Core plugin JavaScript--> */}
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    {/* <!-- Custom scripts for all pages--> */}
    <script src="js/sb-admin-2.min.js"></script>

    {/* <!-- Page level plugins --> */}
    <script src="vendor/chart.js/Chart.min.js"></script>

    {/* <!-- Page level custom scripts --> */}
    <script src="js/demo/chart-area-demo.js"></script>
    <script src="js/demo/chart-pie-demo.js"></script>
    <script src="js/demo/chart-bar-demo.js"></script>
</section>

);
}
export default Chart;
