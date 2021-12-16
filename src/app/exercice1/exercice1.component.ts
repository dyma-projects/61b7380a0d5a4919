import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public colors: string[] = ["red", "blue", "green", "yellow"];
  public selectedColor: string = "";

  constructor() {}

  ngOnInit(): void {}

  public changeColor(event: string): void {
    this.selectedColor = event;
    console.log(this.selectedColor);
  }

  public click(): void {
    console.log("clic");
  }
}
