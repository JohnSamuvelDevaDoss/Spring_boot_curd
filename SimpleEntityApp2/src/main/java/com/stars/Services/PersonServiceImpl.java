package com.stars.Services;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import org.springframework.stereotype.Repository;
import com.stars.Models.Persons;

@Transactional
@Repository
public class PersonServiceImpl implements PersonServiceDao {

	@PersistenceContext
	private EntityManager entitymanager;
	
	@Override
	public boolean SavePerson(Persons person) {
		if(entitymanager.find(Persons.class, person.getId()) == null) {
		entitymanager.persist(person);
		return true;
		}else {
			return false;
		}
	}

	@Override
	public List<Persons> getPersons() {
		String query = "From Persons";
		@SuppressWarnings("unchecked")
		List<Persons> list=entitymanager.createQuery(query).getResultList();
		return list;
	}

	@Override
	public boolean updatePerson(Persons person) {
		if(entitymanager.find(Persons.class, person.getId())!=null) {
			//entitymanager.persist(person);
			String query = "update Persons set name='"+person.getName()+"', age='"+person.getAge()+"' where id="+person.getId()+"";
			int i = entitymanager.createQuery(query).executeUpdate();
			if(i>0) {
				return true;
				}else {
					return false;
				}
			}else {
			return false;
			}
	}

	@Override
	public boolean deletePerson(Persons person) {
		if(entitymanager.find(Persons.class, person.getId())!=null) {
			System.out.println(person.getAge());
			String query = "delete from Persons where id="+person.getId()+"";
			int i = entitymanager.createQuery(query).executeUpdate();
			//entitymanager.remove(person);
			if(i>0) {
			return true;
			}else {
				return false;
			}
		}else {
		return false;
		}
	}

}
