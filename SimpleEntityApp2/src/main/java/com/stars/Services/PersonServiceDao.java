package com.stars.Services;

import java.util.List;
import com.stars.Models.Persons;

public interface PersonServiceDao{
	public boolean SavePerson(Persons person);
	public List<Persons> getPersons();
	public boolean updatePerson(Persons person);
	public boolean deletePerson(Persons person);
}
