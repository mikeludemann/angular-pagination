import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'pagination-numbers',
	templateUrl: './pagination-numbers.component.html',
	styleUrls: ['./pagination-numbers.component.css']
})
export class PaginationNumbersComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@ViewChild('pagnum', {static: false}) el: ElementRef;

	constructor() { }

	ngOnInit() {
		var list = [];
		var pageList = [];
		var currentPage = 1;
		var numberPerPage = 5;
		var numberOfPages = 0;

		function makeList() {
			for (var x = 0; x < 50; x++)
				list.push(x);

			numberOfPages = getNumberOfPages();
		}

		function getNumberOfPages() {
			return Math.ceil(list.length / numberPerPage);
		}

		function nextPage() {
			currentPage += 1;
			loadList();
		}

		function previousPage() {
			currentPage -= 1;
			loadList();
		}

		function firstPage() {
			currentPage = 1;
			loadList();
		}

		function lastPage() {
			currentPage = numberOfPages;
			loadList();
		}

		function loadList() {
			var begin = ((currentPage - 1) * numberPerPage);
			var end = begin + numberPerPage;

			pageList = list.slice(begin, end);
			drawList();
			check();
		}

		function drawList() {
			document.getElementById("list").innerHTML = "";
			for (var r = 0; r < pageList.length; r++) {
				document.getElementById("list").innerHTML += pageList[r] + "<br/>";
			}
		}

		function check() {
			(<HTMLInputElement> document.getElementById("next")).disabled = currentPage === numberOfPages ? true : false;
			(<HTMLInputElement> document.getElementById("previous")).disabled = currentPage === 1 ? true : false;
			(<HTMLInputElement> document.getElementById("first")).disabled = currentPage === 1 ? true : false;
			(<HTMLInputElement> document.getElementById("last")).disabled = currentPage === numberOfPages ? true : false;

			if(currentPage === 1){
				document.getElementById("first").style.display = "none";
				document.getElementById("previous").style.display = "none";
			} else {
				document.getElementById("first").style.display = "inline-block";
				document.getElementById("previous").style.display = "inline-block";
			}

			if(currentPage === numberOfPages){
				document.getElementById("last").style.display = "none";
				document.getElementById("next").style.display = "none";
			} else {
				document.getElementById("last").style.display = "inline-block";
				document.getElementById("next").style.display = "inline-block";
			}
		}

		document.getElementById("next").addEventListener("click", function(){
			nextPage();
		});
		document.getElementById("previous").addEventListener("click", function(){
			previousPage();
		});
		document.getElementById("first").addEventListener("click", function(){
			firstPage();
		});
		document.getElementById("last").addEventListener("click", function(){
			lastPage();
		});

		function load() {
			makeList();
			loadList();
		}

		window.onload = load;
	}

}
