package com.stars.Controllers;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.stars.Models.Persons;
import com.stars.Services.PersonServiceDao;

@RestController
public class PersonController {

	@Autowired
	private PersonServiceDao personized;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/savePerson", method = RequestMethod.POST, produces="application/json", consumes="application/json")
	public ResponseEntity<Boolean> savePerson(@RequestBody Persons personInfo,HttpServletRequest request,HttpServletResponse response) {
		//response.setHeader("Access-Control-Allow-Origin", "http://localhost:420
		System.out.println("insisde save person");
		personInfo.setId(personInfo.getId());
		personInfo.setName(personInfo.getName());
		personInfo.setAge(personInfo.getAge());
		System.out.println(personInfo.getAge());
		boolean status = personized.SavePerson(personInfo);
		System.out.println(ResponseEntity.status(HttpStatus.CREATED).body(personized.SavePerson(personInfo)));
		if(status) {
			return ResponseEntity.status(HttpStatus.CREATED).body(personized.SavePerson(personInfo));
		}else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(personized.SavePerson(personInfo));
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/getpersons",produces="application/json",method = RequestMethod.GET)
	public List<Persons> getall(HttpServletRequest request,HttpServletResponse response){
		//response.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
		return personized.getPersons();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value="/updatePerson",produces="application/json", consumes="application/json")
	public boolean updatePerson(@RequestBody Persons personInfo,HttpServletRequest request,HttpServletResponse response) {
		
		personInfo.setId(personInfo.getId());
		personInfo.setName(personInfo.getName());
		personInfo.setAge(personInfo.getAge());
		boolean status = personized.updatePerson(personInfo);
		return status;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value="/deletePerson",produces="application/json", consumes="application/json")
	public boolean deletePerson(@RequestBody Persons personInfo,HttpServletRequest request,HttpServletResponse response) {
		
		personInfo.setId(personInfo.getId());
		personInfo.setName(personInfo.getName());
		personInfo.setAge(personInfo.getAge());
		boolean status = personized.deletePerson(personInfo);
		return status;
	}
}
