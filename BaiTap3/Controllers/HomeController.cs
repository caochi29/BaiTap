using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BaiTap3.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Bai1()
        {
            return View();
        }
        public ActionResult Bai2()
        {
            return View();
        }
        public ActionResult Bai3()
        {
            return View();
        }
        public ActionResult Bai4()
        {
            return View();
        }
        public ActionResult Bai5()
        {
            return View();
        }
        public ActionResult Vd8()
        {
            return View();
        }
        public ActionResult Vd7()
        {
            return View();
        }
    }
}